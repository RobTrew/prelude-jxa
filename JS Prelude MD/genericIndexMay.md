```javascript
// genericIndexMay :: [a] -> Int -> Maybe a
const genericIndexMay = xs =>
    i => (i < xs.length && 0 <= i) ? (
        Just(xs[i])
    ) : Nothing();
```