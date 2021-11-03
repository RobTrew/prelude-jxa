```javascript
// minimum :: Ord a => [a] -> a
const minimum = xs =>
    // The least value of xs.
    0 < xs.length ? (
        xs.slice(1)
        .reduce((a, y) => y < a ? y : a, xs[0])
    ) : null;
```