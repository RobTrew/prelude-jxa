```javascript
// initMay :: [a] -> Maybe [a]
const initMay = xs =>
    Boolean(xs.length) ? (
        Just(xs.slice(0, -1))
    ) : Nothing();
```