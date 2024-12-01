```javascript
// zipWithList_ :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWithList_ = f =>
    // A list constructed by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    xs => ys => Array.from(
        { length: Math.min(xs.length, ys.length) },
        (_, i) => f(xs[i])(ys[i])
    );
```