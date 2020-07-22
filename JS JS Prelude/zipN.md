```js
// zipN :: [a] -> [b] -> ... -> [(a, b ...)]
function zipN() {
    const args = Array.from(arguments).map(list);
    return 1 < args.length ? (
        take(
            Math.min(...args.map(length))
        )(args[0]).map(
            (x, i) => TupleN(...args.map(y => y[i]))
        )
    ) : args;
}
```