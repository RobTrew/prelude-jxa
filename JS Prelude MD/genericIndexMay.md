```js
// genericIndexMay :: [a] -> Int -> Maybe a
const genericIndexMay = (xs, i) =>
    (i < xs.length && i >= 0) ? Just(xs[i]) : Nothing();
```