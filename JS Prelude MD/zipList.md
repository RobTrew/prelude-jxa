```js
// zipList :: [a] -> [b] -> [(a, b)]
const zipList = xs => ys =>
    xs.slice(
        0, Math.min(xs.length, ys.length)
    ).map((x, i) => Tuple(x)(ys[i]));
```