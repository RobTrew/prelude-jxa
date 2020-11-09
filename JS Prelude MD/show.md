```javascript
// show :: a -> String
// show :: a -> Int -> Indented String
const show = x =>
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
            'Node': () => showTree,
            'Num': () => str,
            'Ratio': () => showRatio,
            'String': () => str,
            'Tuple': () => showTuple
        })[typeName(x)]()(v)
    );
```