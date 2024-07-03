```javascript
// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
const zipWithN = (...args) => {
    // Uncurried function of which the first argument is
    // a function, and all remaining arguments are lists.
    const go = ([f0, ...rows]) => {
        const
            n = Math.min(
                ...rows.map(x => x.length)
            );

        return rows.slice(1).reduce(
            (fs, xs) => fs.map(
                (f, i) => f(xs[i])
            )
            .slice(0, n),
            rows[0].map(f0)
        );
    };

    return 1 < args.length
        ? go(args)
        : [];
};
```