```javascript
// listToMaybe :: [a] -> Maybe a
const listToMaybe = xs =>
    // Nothing if xs is empty, or Just the head of xs.
    0 < xs.length ? (
        Just(xs[0])
    ) : Nothing();
```