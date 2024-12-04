```javascript
// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
const zip3 = xs =>
    // Triples of the values at each position of
    // xs,ys,zs up to the length of the shortest.
    ys => zs => Array.from(
        {
            length: Math.min(
                ...[xs, ys, zs].map(x => x.length)
            )
        },
        (_, i) => [xs[i], ys[i], zs[i]]
    );
```