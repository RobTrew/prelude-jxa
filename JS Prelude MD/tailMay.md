```javascript
// tailMay :: [a] -> Maybe [a]
const tailMay = xs =>
    Boolean(xs.length) ? (
        Just(xs.slice(1))
    ) : Nothing();
```