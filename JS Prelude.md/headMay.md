```js
// headMay :: [a] -> Maybe a
const headMay = xs =>
    xs.length > 0 ? Just(xs[0]) : Nothing();
```