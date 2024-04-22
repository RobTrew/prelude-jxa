```javascript
// foldr1May :: (a -> a -> a) -> [a] -> Maybe a
const foldr1May = f =>
    // Nothing if xs is empty, or Just a right
    // fold of f over the list using the last
    // item of xs as the initial accumulator value.
    xs => Boolean(xs.length)
        ? Just(
            xs.slice(0, -1).reduceRight(
                uncurry(f),
                xs.slice(-1)[0])
        )
        : Nothing();
```