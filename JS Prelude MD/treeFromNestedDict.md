```javascript
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
            1 < lng ? (() => {
                const
                    listing = bulleted("    ")(
                        unlines(lists.map(fst))
                    ),
                    msg = `Ambiguous structure :: ${lng}` + (
                        ` multiple sublists in:\n${dct.name}`
                    );

                return Left(`${msg}:\n${listing}`);
            })() : (() => {
                const [nestName, xs] = lists[0];

                return bindLR(traverseList(go)(xs))(
                    vs => Right(
                        Node({
                            ...deleteKey(nestName)(dct),
                            "List title": nestName
                        })(vs)
                    )
                );
            })()
        ) : Right(Node(dct)([]));
    };

    return go(dict);
};
```