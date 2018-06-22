```js
// zipWith4 :: (a -> b -> c -> d -> e) -> [a] -> [b] -> [c] -> [d] -> [e]
const zipWith4 = (f, ws, xs, ys, zs) =>
    Array.from({
        length: Math.min(ws.length, xs.length, ys.length, zs.length)
    }, (_, i) => f(ws[i], xs[i], ys[i], zs[i]));
```