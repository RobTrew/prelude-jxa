```js
// maximum :: Ord a => [a] -> a
const maximum = xs =>
    0 < xs.length ? (
        foldl1((a, x) => x > a ? x : a, xs)
    ) : undefined;
```