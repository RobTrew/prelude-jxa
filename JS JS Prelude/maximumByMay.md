```js
// maximumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const maximumByMay = f =>
    xs => (
        ys => ys.length > 0 ? (
            Just(ys.slice(1)
                .reduce((a, y) => 0 < f(a)(y) ? (
                    a
                ) : y, ys[0]))
        ) : Nothing()
    )(list(xs));
```