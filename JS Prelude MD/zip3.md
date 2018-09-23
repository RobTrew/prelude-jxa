```js
// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
const zip3 = (xs, ys, zs) =>
    xs.slice(0, Math.min(length(xs), length(ys), length(zs)))
    .map((x, i) => TupleN(x, ys[i], zs[i]));
```