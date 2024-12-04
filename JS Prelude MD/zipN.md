```javascript
// zipN :: [a] -> [b] -> ... -> [(a, b ...)]
const zipN = (...xss) =>
    0 < xss.length
        ? Array.from(
            { length: Math.min(...xss.map(xs => xs.length)) },
            (_, i) => TupleN(...xss.map(xs => xs[i]))
        )
        : [];
```