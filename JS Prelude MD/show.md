```javascript
// show :: a -> String
// show :: a -> Int -> Indented String
const show = x => {
    const
        str = y => y.toString(),
        t = typeName(x);

    return Boolean(t) ? (
        "Node" !== t ? (
            JSON.stringify(
                x,
                (_, v) => ({
                    "(a -> b)": () => showFn,
                    "Bool": () => str,
                    "Bottom": () => showUndefined,
                    "Date": () => a => a,
                    "Dict": () => a => a,
                    "Either": () => showLR,
                    "List": () => showList,
                    "Maybe": () => showMaybe,
                    "Num": () => str,
                    "Ratio": () => showRatio,
                    "String": () => str,
                    "Tuple": () => showTuple
                })[t]()(v)
            )
        ) : showTree(x)
    ) : `No Show instance has been defined for ${t}.`;
};
```