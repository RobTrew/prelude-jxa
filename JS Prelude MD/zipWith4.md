```js
// zipWith4 :: (a -> b -> c -> d -> e) -> [a] -> [b] -> [c] -> [d] -> [e]
const zipWith4 = (f, ws, xs, ys, zs) =>
    Array.from({
        length: minimum([ws, xs, ys, zs].map(length))
    }, (_, i) => f(ws[i], xs[i], ys[i], zs[i]));
```