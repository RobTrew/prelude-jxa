```javascript
// tailMay :: [a] -> Maybe [a]
const tailMay = xs =>
    0 < xs.length ? (
        Just(xs.slice(1))
    ) : Nothing();
```