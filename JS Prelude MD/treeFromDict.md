```js
// treeFromDict :: String -> Dict -> Tree String
const treeFromDict = rootLabel => dict => {
    const go = x =>
        'object' !== typeof x ? [] : (
            Array.isArray(x) ? (
                map(v => Node(v, []), x)
            ) : map(k => Node(k, go(x[k])), keys(x))
        );
    return Node(rootLabel, go(dict));
};
```