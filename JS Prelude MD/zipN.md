```js
// zipN :: [a] -> [b] ... -> [(a, b ...)]
function zipN() {
    const args = Array.from(arguments);
    return 1 < args.length ? map(
        (x, i) => TupleN(...map(y => y[i], args)),
        take(
            Math.min(...map(length, args)),
            args[0]
        )
    ) : args;
}
```