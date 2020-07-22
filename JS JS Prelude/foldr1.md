```js
// foldr1 :: (a -> a -> a) -> [a] -> a
const foldr1 = f =>
    xs => (ys => 0 < ys.length ? (
        init(ys).reduceRight(
            uncurry(f),
            last(ys)
        )
    ) : [])(list(xs));
```