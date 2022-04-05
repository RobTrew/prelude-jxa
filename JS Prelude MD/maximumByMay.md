```javascript
// maximumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const maximumByMay = f =>
    xs => Boolean(xs.length) ? (
        Just(xs.slice(1).reduce(
            (a, x) => 0 < f(a)(x) ? (
                a
            ) : x,
            xs[0]
        ))
    ) : Nothing();
```