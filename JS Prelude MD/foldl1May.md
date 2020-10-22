```javascript
// foldl1May :: (a -> a -> a) -> [a] -> Maybe a
const foldl1May = f =>
    xs => (
        ys => 0 < ys.length ? (
            Just(ys.slice(1)
                .reduce(uncurry(f), ys[0]))
        ) : Nothing()
    )(list(xs));
```