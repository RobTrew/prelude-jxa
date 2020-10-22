```javascript
// scanl1 :: (a -> a -> a) -> [a] -> [a]
const scanl1 = f =>
    // scanl1 is a variant of scanl that has no 
    // starting value argument.
    xs => xs.length > 0 ? (
        scanl(f)(
            xs[0]
        )(xs.slice(1))
    ) : [];
```