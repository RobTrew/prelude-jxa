```js
// zipWithList :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWithList = f =>
    // A list constructed by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    xs => ys => ((xs_, ys_) => {
        const lng = Math.min(length(xs_), length(ys_));
        return take(lng)(xs_).map(
            (x, i) => f(x)(ys_[i])
        );
    })([...xs], [...ys]);
```