```js
// zipWithList :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWithList = f =>
    // A list constructed by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    xs => ys => {
        const
            lng = Math.min(length(xs), length(ys)),
            vs = take(lng)(ys);
        return take(lng)(xs)
        .map((x, i) => f(x)(vs[i]));
    };
```