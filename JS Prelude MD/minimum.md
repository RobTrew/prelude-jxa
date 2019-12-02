```js
// minimum :: Ord a => [a] -> a
const minimum = xs =>
    0 < xs.length ? (
        xs.slice(1)
        .reduce((a, x) => x < a ? x : a, xs[0])
    ) : undefined;
```