```js
// minimumBy :: (a -> a -> Ordering) -> [a] -> a
const minimumBy = f => xs =>
    list(xs).reduce((a, x) => undefined === a ? x : (
        0 > f(x)(a) ? x : a
    ), undefined);
```