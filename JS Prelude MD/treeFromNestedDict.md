```js
// treeFromNestedDict -> Dict -> Either String Tree Dict
const treeFromNestedDict = dict => {
    // A generic Tree structure from a dict
    // with keys assumed to include no more than
    // one key to a *list* value,
    // with this pattern applied recursively
    // to each child dictionary in such a list.
    const go = dct => {
        const
            kvs = Object.entries(dct),
            lists = kvs.filter(
                ([_, v]) => Array.isArray(v)
            ),
            lng = lists.length;
        return 0 < lng ? (
            1 < lng ? (
                Left(
                    'Ambiguous structure :: ' +
                    lng.toString() + (
                        ' multiple sublists in:\n  "' +
                        dct.name + (
                            '":\n' + bulleted('    ')(
                                unlines(lists.map(fst))
                            )
                        )
                    )
                )
            ) : (() => {
                const [nestName, xs] = lists[0];
                return bindLR(traverseList(go)(xs))(
                    xs => Right(
                        Node(
                            Object.assign(
                                deleteKey(nestName)(
                                    dct
                                ), {
                                    'List title': nestName
                                }
                            )
                        )(xs)
                    )
                );
            })()
        ) : Right(Node(dct)([]))
    };
    return go(dict);
};
```