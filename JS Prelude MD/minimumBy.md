```javascript
// minimumBy :: (a -> a -> Ordering) -> [a] -> a
const minimumBy = f =>
    xs => 0 < xs.length ? (
        xs.slice(1).reduce(
            (a, x) => 0 > f(x)(a) ? (
                x
            ) : a,
            xs[0]
        )
    ) : undefined;
```