```js
// zipWith3 :: (a -> b -> c -> d) -> [a] -> [b] -> [c] -> [d]
const zipWith3 = (f, xs, ys, zs) =>
    Array.from({
        length: Math.min(length(xs), length(ys), length(zs))
    }, (_, i) => f(xs[i], ys[i], zs[i]));
```