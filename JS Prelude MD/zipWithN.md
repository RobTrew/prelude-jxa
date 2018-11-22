```js
// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
function zipWithN() {
    const
        args = Array.from(arguments),
        rows = args.slice(1),
        f = args[0];
    return 1 < rows.length ? map(
        i => f(...map(r => r[i], rows)),
        enumFromTo(
            0,
            Math.min(...map(length, rows)) -1,
        )
    ) : rows;
}

// or

// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
// const zipWithN = (f, tplLists) =>
//     map(x => f(...Array.from(x)),
//         zipN(...Array.from(tplLists))
//     );
```