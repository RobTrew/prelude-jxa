```javascript
// zipWithList_ :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWithList_ = f =>
    // A list constructed by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    xs => ys => take(
        Math.min(xs.length, ys.length)
    )(
        xs.map((x, i) => f(x)(ys[i]))
    );
```