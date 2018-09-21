```js
// initMay :: [a] -> Maybe [a]
const initMay = xs =>
    0 < xs.length ? Just(xs.slice(0, -1)) : Nothing();
```