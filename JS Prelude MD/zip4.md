```javascript
// zip4 :: [a] -> [b] -> [c] -> [d] -> [(a, b, c, d)]
const zip4 = ws =>
    // List of triples of the values at each position
    // of xs,ys,zs up to the length of the shortest.
    xs => ys => zs => Array.from(
        {
            length: Math.min(
                ...[ws, xs, ys, zs].map(x => x.length)
            )
        },
        (_, i) => [ws[i], xs[i], ys[i], zs[i]]
    );
```