```js
// cartesianProduct :: [a] -> [b] -> [(a, b)]
const cartesianProduct = xs =>
    ys => xs.flatMap(
        x => ys.flatMap(Tuple(x))
    );
```