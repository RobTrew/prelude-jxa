```javascript
// zipWithList_ :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWithList_ = f =>
    // A list constructed by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    xs => ys => xs.map(
        (x, i) => f(x)(ys[i])
    ).slice(
        0, Math.min(xs.length, ys.length)
    );
```