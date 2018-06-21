```js
// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
const zip3 = (xs, ys, zs) =>
    xs.slice(0, Math.min(xs.length, ys.length, zs.length))
    .map((x, i) => Tuple3(x, ys[i], zs[i]));
```