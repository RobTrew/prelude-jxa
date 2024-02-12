```javascript
// zipWith_ :: (a -> a -> b) -> [a] -> [b]
const zipWith_ = f =>
    // A list with the length of the shorter of
    // xs and ys, defined by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    xs => ys => xs.slice(
        0, Math.min(xs.length, ys.length)
    )
    .map((x, i) => f(x)(ys[i]));
```