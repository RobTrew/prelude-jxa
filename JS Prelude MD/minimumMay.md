```javascript
// minimumMay :: [a] -> Maybe a
const minimumMay = xs => (
    ys => 0 < ys.length ? (
        Just(ys.slice(1)
            .reduce((a, y) => y < a ? y : a, ys[0])
        )
    ) : Nothing()
)(list(xs));
```