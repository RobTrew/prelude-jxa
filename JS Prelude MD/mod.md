```javascript
// mod :: Int -> Int -> Int
const mod = n =>
    // Inherits the sign of the *divisor* for non zero
    // results. Compare with `rem`, which inherits
    // the sign of the *dividend*.
    d => (n % d) + (
        signum(n) === signum(-d)
            ? d
            : 0
    );
```