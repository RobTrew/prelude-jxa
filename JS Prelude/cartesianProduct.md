```js
// cartesianProduct :: [a] -> [b] -> [(a, b)]
const cartesianProduct = (xs, ys) =>
    apList(xs.map(x => y => Tuple(x, y)), ys);
```