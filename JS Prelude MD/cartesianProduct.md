```js
// cartesianProduct :: [a] -> [b] -> [(a, b)]
const cartesianProduct = xs =>
    ys => list(xs).flatMap(
        x => list(ys).flatMap(Tuple(x))
    );
```