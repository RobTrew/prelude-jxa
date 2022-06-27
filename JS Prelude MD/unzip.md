```javascript
// unzip :: [(a,b)] -> ([a],[b])
const unzip = xys =>
    // A list of the first items in each pair
    // of the zip, tupled with a list of all
    // the second items.
    xys.reduceRight(
        ([a, b], [x, y]) => [
            [x, ...a],
            [y, ...b]
        ],
        [
            [],
            []
        ]
    );
```