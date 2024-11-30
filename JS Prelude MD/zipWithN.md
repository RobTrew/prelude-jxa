```javascript
// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
const zipWithN = (...args) => {
    // Uncurried function of which the first argument is a
    // curried function, and all remaining arguments are lists.

    // uncurry apZip
    const az = (fs, vs) =>
        fs.map((f, i) => f(vs[i]))
            .slice(0, Math.min(fs.length, vs.length));

    return 1 < args.length
        ? (
            ([f, ...xs]) => xs.slice(1).reduce(
                az,
                xs[0].map(f)
            )
        )(args)
        : [];
};
```