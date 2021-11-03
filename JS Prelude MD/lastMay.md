```javascript
// lastMay :: [a] -> Maybe a
const lastMay = xs =>
    0 < xs.length ? (
        Just(xs.slice(-1)[0])
    ) : Nothing();
```