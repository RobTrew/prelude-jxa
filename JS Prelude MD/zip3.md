```javascript
// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
const zip3 = xs =>
    ys => zs => xs.slice(
        0,
        Math.min(...[xs, ys, zs].map(x => x.length))
    )
    .map((x, i) => [x, ys[i], zs[i]]);
```