```js
// initMay :: [a] -> Maybe [a]
const initMay = xs =>
    xs.length > 0 ? Just(xs.slice(0, -1)) : Nothing();
```