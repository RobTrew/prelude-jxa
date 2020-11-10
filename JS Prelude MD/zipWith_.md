```javascript
// zipWith_ :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith_ = f =>
    // A list defined by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    xs => ys => xs.slice(
        0, Math.min(xs.length, ys.length)
    ).map((x, i) => f(x)(ys[i]));
```