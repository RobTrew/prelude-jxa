```javascript
// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
const zipWithN = (...args) => {
    // Uncurried function of which the first argument is
    // a function, and all remaining arguments are lists.
    const rows = args.slice(1);

    return 0 < rows.length
        ? (() => {
            const
                n = Math.min(...rows.map(x => x.length)),
                // Uncurried reduction of zipWith(identity)
                apZL_ = (fs, ys) => fs.map(
                    (f, i) => f(ys[i])
                )
                .slice(0, n);

            return rows.slice(1).reduce(
                apZL_,
                rows[0].map(args[0])
            );
        })()
        : [];
};
```