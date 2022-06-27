```javascript
// unzip :: [(a,b)] -> ([a],[b])
const unzip = xys =>
    xys.reduce(
        ([a, b], [x, y]) => [
            [...a, x],
            [...b, y]
        ],
        [
            [],
            []
        ]
    );
```