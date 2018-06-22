```js
// zip :: [a] -> [b] -> [(a, b)]
const zip = (xs, ys) =>
    xs.slice(0, Math.min(xs.length, ys.length))
    .map((x, i) => Tuple(x, ys[i]));
```