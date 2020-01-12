```js
// treeFromDict :: String -> Dict -> Tree String
const treeFromDict = rootLabel =>
    dict => {
        const go = x =>
            'object' !== typeof x ? [] : (
                Array.isArray(x) ? (
                    x.map(v => Node(v, []))
                ) : keys(x).map(
                    k => Node(k)(
                        go(x[k])
                    )
                )
            );
        return Node(rootLabel)(
            go(dict)
        );
    };
```