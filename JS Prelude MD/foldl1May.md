```javascript
// foldl1May :: (a -> a -> a) -> [a] -> Maybe a
const foldl1May = f =>
    xs => 0 < xs.length
        ? Just(
            xs.slice(1)
            .reduce(uncurry(f), xs[0])
        )
        : Nothing();
```