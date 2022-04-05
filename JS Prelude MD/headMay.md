```javascript
// headMay :: [a] -> Maybe a
const headMay = xs =>
    // Just the first item of xs, or
    // Nothing if xs is an empty list.
    Boolean(xs.length) ? (
        Just(xs[0])
    ) : Nothing();
```