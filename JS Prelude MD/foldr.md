```javascript
// foldr :: (a -> b -> b) -> b -> [a] -> b
const foldr = f =>
    // Note that that the Haskell signature of foldr differs from that of
    // foldl - the positions of accumulator and current value are reversed
    a => xs => [...xs].reduceRight(
        (a, x) => f(x)(a),
        a
    );
```