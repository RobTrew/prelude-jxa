```javascript
// maximumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const maximumByMay = f =>
    xs => xs.length > 0 ? (
        Just(xs.slice(1).reduce(
            (a, x) => 0 < f(a)(x) ? (
                a
            ) : x,
            xs[0]
        ))
    ) : Nothing();
```