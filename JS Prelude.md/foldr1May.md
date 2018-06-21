```js
// foldr1May :: (a -> a -> a) -> [a] -> Maybe a
const foldr1May = (f, xs) =>
    xs.length > 0 ? (
        Just(xs.slice(0, -1)
            .reduceRight(f, xs.slice(-1)[0]))
    ) : Nothing();
```