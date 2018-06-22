```js
// cartesianProduct :: [a] -> [b] -> [(a, b)]
const cartesianProduct = (xs, ys) =>
    concatMap((x => concatMap(y => [
        [Tuple(x, y)]
    ], ys)), xs);
```