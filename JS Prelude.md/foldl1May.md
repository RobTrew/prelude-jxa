```js
// foldl1May :: (a -> a -> a) -> [a] -> Maybe a
const foldl1May = (f, xs) =>
    xs.length > 0 ? (
        Just(xs.slice(1)
            .reduce(f, xs[0]))
    ) : Nothing();
```