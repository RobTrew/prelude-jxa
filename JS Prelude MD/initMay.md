```javascript
// initMay :: [a] -> Maybe [a]
const initMay = xs => (
    ys => 0 < ys.length ? (
        Just(ys.slice(0, -1))
    ) : Nothing()
)(list(xs));
```