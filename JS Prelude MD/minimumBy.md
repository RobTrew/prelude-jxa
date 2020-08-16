```js
// minimumBy :: (a -> a -> Ordering) -> [a] -> a
const minimumBy = f =>
    xs => {
        const ys = list(xs);
        return 0 < ys.length ? (
            ys.slice(1).reduce(
                (a, y) => 0 > f(y)(a) ? (
                    y
                ) : a,
                ys[0]
            )
        ) : undefined
    };
```