```javascript
// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
const zipWithN = (...args) => {
    const
        rows = args.slice(1).map(xs => Array.from(xs)),
        n = Math.min(...rows.map(x => x.length)),
        f = uncurryN(args[0]);

    return 0 < n ? (
        take(n)(rows[0]).map(
            (x, i) => f(TupleN(
                ...rows.flatMap(v => v[i])
            ))
        )
    ) : [];
};
```