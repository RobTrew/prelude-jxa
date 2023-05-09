```javascript
// minimumMay :: [a] -> Maybe a
const minimumMay = xs =>
    Boolean(xs.length) ? (
        Just(xs.slice(1).reduce(
            (a, x) => x < a ? (
                x
            ) : a,
            xs[0]
        ))
    ) : Nothing();
```