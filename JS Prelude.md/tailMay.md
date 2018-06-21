```js
// tailMay :: [a] -> Maybe [a]
const tailMay = xs =>
    xs.length > 0 ? (
        Just(xs.slice(1))
    ) : Nothing();
```