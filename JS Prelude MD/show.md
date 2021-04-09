```javascript
// show :: a -> String
// show :: a -> Int -> Indented String
const show = x => {
    const
        instances = {
            "(a -> b)": () => showFn,
            "Bool": () => str,
            "Bottom": () => showUndefined,
            "Date": () => a => a,
            "Dict": () => a => a,
            "Either": () => showLR,
            "List": () => showList,
            "Maybe": () => showMaybe,
            "Node": () => a => a,
            "Num": () => str,
            "Ratio": () => showRatio,
            "String": () => str,
            "Tuple": () => showTuple
        },
        str = y => y.toString(),
        t = typeName(x);

    const instance = instances[
        (/^Tuple/u).test(t) ? (
            "Tuple"
        ) : t
    ];

    return Boolean(instance) ? (
        JSON.stringify(
            x,
            (_, v) => instance()(v)
        )
    ) : `No Show instance has been defined for ${t}.`;
};
```