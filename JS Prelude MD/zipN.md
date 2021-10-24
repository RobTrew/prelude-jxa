```javascript
// zipN :: [a] -> [b] -> ... -> [(a, b ...)]
const zipN = (...argv) => {
    const args = argv.map(xs => Array.from(xs));

    return 1 < args.length ? (
        take(
            Math.min(...args.map(length))
        )(args[0]).map(
            (x, i) => TupleN(...args.map(y => y[i]))
        )
    ) : args;
};
```