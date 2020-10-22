```js
// lastMay :: [a] -> Maybe a
const lastMay = xs => (
    ys => 0 < ys.length ? (
        Just(ys.slice(-1)[0])
    ) : Nothing()
)(list(xs));
```