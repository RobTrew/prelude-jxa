```javascript
// lastMay :: [a] -> Maybe a
const lastMay = xs =>
    Boolean(xs.length) ? (
        Just(xs.slice(-1)[0])
    ) : Nothing();
```