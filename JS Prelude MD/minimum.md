```javascript
// minimum :: Ord a => [a] -> a
const minimum = xs =>
    // The least value of xs.
    Boolean(xs.length) ? (
        xs.slice(1)
        .reduce((a, x) => x < a ? (
                x
            ) : a,
            xs[0]
        )
    ) : null;
```