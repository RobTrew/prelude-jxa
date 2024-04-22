```javascript
// foldr1 :: (a -> a -> a) -> [a] -> a
const foldr1 = f =>
    xs => 0 < xs.length
        ? xs.slice(0, -1).reduceRight(
            uncurry(f),
            xs.slice(-1)[0]
        )
        : [];
```