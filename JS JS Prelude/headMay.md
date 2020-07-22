```js
// headMay :: [a] -> Maybe a
const headMay = xs => (
    ys => 0 < ys.length ? (
        Just(ys[0])
    ) : Nothing()
)(list(xs));
```