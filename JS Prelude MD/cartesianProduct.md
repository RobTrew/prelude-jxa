```js
// cartesianProduct :: [a] -> [b] -> [[a, b]]
// cartesianProduct :: [a] -> [b] -> [[a, b]]
const cartesianProduct = xs =>
    ys => (
        bs => list(xs).flatMap(
            x => bs.flatMap(b => [
                [x].concat(b)
            ])
        )
    )(list(ys));
```