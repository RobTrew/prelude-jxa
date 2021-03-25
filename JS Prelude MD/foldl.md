```javascript
// foldl :: (a -> b -> a) -> a -> [b] -> a
const foldl = f =>
    // Note that that the signature of foldl differs
    // from that of foldr - the positions of
    // accumulator and current value in f are reversed.
    a => xs => [...xs].reduce(
        (x, y) => f(x)(y),
        a
    );
```