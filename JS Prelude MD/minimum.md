```javascript
// minimum :: Ord a => [a] -> a
const minimum = xs => (
    // The least value of xs.
    ys => 0 < ys.length ? (
        ys.slice(1)
        .reduce((a, y) => y < a ? y : a, ys[0])
    ) : undefined
)(list(xs));
```