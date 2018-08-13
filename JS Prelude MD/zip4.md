```js
// zip4 :: [a] -> [b] -> [c] -> [d] -> [(a, b, c, d)]
const zip4 = (ws, xs, ys, zs) =>
    ws.slice(0, Math.min(
        xs.length, xs.length, ys.length, zs.length
    ))
    .map((w, i) => TupleN(w, xs[i], ys[i], zs[i]));
```