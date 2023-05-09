```javascript
// listToMaybe :: [a] -> Maybe a
const listToMaybe = xs =>
    // Nothing if xs is empty, or Just the head of xs.
    Boolean(xs.length) ? (
        Just(xs[0])
    ) : Nothing();
```