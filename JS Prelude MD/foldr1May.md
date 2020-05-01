```js
// foldr1May :: (a -> a -> a) -> [a] -> Maybe a
const foldr1May = f =>
    xs => 0 < xs.length ? (
        Just(xs.slice(0, -1)
            .reduceRight(uncurr(f), xs.slice(-1)[0]))
    ) : Nothing();
```