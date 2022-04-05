```javascript
// maximumBy :: (a -> a -> Ordering) -> [a] -> a
const maximumBy = f =>
    xs => Boolean(xs.length) ? (
        xs.slice(1).reduce(
            (a, x) => 0 < f(x)(a) ? (
                x
            ) : a,
            xs[0]
        )
    ) : undefined;
```