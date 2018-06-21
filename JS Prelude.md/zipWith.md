```js
// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = (f, xs, ys) =>
    Array.from({
        length: Math.min(xs.length, ys.length)
    }, (_, i) => f(xs[i], ys[i], i));
```