```javascript
// foldr1May :: (a -> a -> a) -> [a] -> Maybe a
const foldr1May = f =>
    // Nothing if xs is empty, or Just a right
    // fold of f over the list using the last
    // item of xs as the initial accumulator value.
    xs => (
        ys => 0 < ys.length ? (
            Just(ys.slice(0, -1)
                .reduceRight(uncurry(f), ys.slice(-1)[0]))
        ) : Nothing()
    )(list(xs));
```