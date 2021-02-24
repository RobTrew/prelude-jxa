```javascript
// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
const zipWithN = (...args) => {
    const
        rows = args.slice(1).map(list),
        f = compose(uncurryN(args[0]), TupleN),
        n = Math.min(...rows.map(x => x.length));

    return 0 < n ? (
        take(n))(rows[0]).map(
        (x, i) => f(rows.flatMap(
            v => v[i]
        ))
    ) : [];
};
```