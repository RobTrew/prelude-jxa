```javascript
// foldr :: (a -> b -> b) -> b -> [a] -> b
const foldr = f =>
    // Note that that the signature of foldr differs
    // from that of foldl - the positions of 
    // current value and accumulator in f are reversed
    acc => xs => [...xs].reduceRight(
        (a, x) => f(x)(a),
        acc
    );
```