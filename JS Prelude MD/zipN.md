```javascript
// zipN :: [a] -> [b] -> ... -> [(a, b ...)]
const zipN = (...argv) => {
    const args = argv.map(list);

    return 1 < args.length ? (
        take(
            Math.min(...args.map(length))
        )(args[0]).map(
            (x, i) => TupleN(...args.map(y => y[i]))
        )
    ) : args;
};
```