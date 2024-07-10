```javascript
// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
const zipWithN = (...args) => {
    // Uncurried function of which the first argument is a
    // curried function, and all remaining arguments are lists.
    const go = ([f, ...rows]) => {
        const
            n = Math.min(
                ...rows.map(x => x.length)
            );

        return rows.slice(1).reduce(
            (gs, row) => gs.map(
                (g, iCol) => g(row[iCol])
            )
            .slice(0, n),
            rows[0].map(f)
        );
    };

    return 1 < args.length
        ? go(args)
        : [];
};
```