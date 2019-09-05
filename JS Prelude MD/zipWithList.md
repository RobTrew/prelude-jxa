```js
// zipWithList :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWithList = f => xs => ys =>
    xs.slice(
        0, Math.min(xs.length, ys.length)
    ).map((x, i) => f(x)(ys[i]));
```