```javascript
// maximum :: Ord a => [a] -> a
const maximum = xs =>
    // The largest value in a non-empty list.
    Boolean(xs.length) ? (
        xs.slice(1).reduce(
            (a, x) => x > a ? (
                x
            ) : a,
            xs[0]
        )
    ) : undefined;
```