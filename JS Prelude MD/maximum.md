```js
// maximum :: Ord a => [a] -> a
const maximum = xs =>
    xs.length > 0 ? (
        foldl1((a, x) => x > a ? x : a, xs)
    ) : undefined;
```