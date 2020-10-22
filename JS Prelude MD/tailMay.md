```javascript
// tailMay :: [a] -> Maybe [a]
const tailMay = xs => (
    ys => 0 < ys.length ? (
        Just(ys.slice(1))
    ) : Nothing()
)(list(xs));
```