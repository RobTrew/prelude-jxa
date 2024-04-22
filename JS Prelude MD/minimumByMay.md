```javascript
// minimumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const minimumByMay = f =>
    xs => xs.reduce(
        (a, x) => a.Nothing
            ? Just(x)
            : f(x)(a.Just) < 0
                ? Just(x)
                : a,
        Nothing()
    );
```