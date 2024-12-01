```javascript
// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
const zipWithN = (...args) =>
    // Uncurried function of which the first argument is a
    // curried function, and all remaining arguments are lists.
    1 < args.length
        ? (
            ([f, xs, ...rest]) => rest.reduce(
                // apZip
                (gs, vs) => gs.map((g, i) => g(vs[i])),
                xs.map(f)
            )
        )(args)
        : [];
```