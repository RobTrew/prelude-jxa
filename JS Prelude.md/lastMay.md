```js
// lastMay :: [a] -> Maybe a
const lastMay = xs => xs.length > 0 ? (
    Just(xs.slice(-1)[0])
) : Nothing();
```