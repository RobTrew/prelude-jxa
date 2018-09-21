```js
// foldl1 :: (a -> a -> a) -> [a] -> a
const foldl1 = (f, xs) =>
    1 < xs.length ? xs.slice(1)
    .reduce(f, xs[0]) : xs[0];
```