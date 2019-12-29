```js
// zipWithList :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWithList = f =>
    xs => ys => {
        const
            lng = Math.min(length(xs), length(ys)),
            vs = take(lng)(ys);
        return take(lng)(xs)
        .map((x, i) => f(x)(vs[i]));
    };
```