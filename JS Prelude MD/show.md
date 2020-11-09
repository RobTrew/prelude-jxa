```javascript
// show :: a -> String
// show :: a -> Int -> Indented String
const show = x => {
    const
        str = x => x.toString(),
        t = typeName(x);
    return 'Node' !== t ? (
        JSON.stringify(
            x,
            (_, v) => ({
                '(a -> b)': () => showFn,
                'Bool': () => str,
                'Bottom': () => showUndefined,
                'Date': () => x => x,
                'Either': () => showLR,
                'List': () => showList,
                'Maybe': () => showMaybe,
                'Num': () => str,
                'Ratio': () => showRatio,
                'String': () => str,
                'Tuple': () => showTuple
            })[t]()(v)
        )
    ) : showTree(x);
};
```