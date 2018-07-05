```js
// minimum :: Ord a => [a] -> a
const minimum = xs =>
    0 < xs.length ? (
        foldl1((a, x) => x < a ? x : a, xs)
    ) : undefined;
```