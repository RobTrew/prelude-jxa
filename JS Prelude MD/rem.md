```javascript
// rem :: Integral a => a -> a -> a
const rem = n =>
    // Inherits the sign of the *dividend* for non-zero
    // results. Compare with `mod`, which inherits
    // the sign of the *divisor*.
    m => [n, m].some(isBigInt) ? (
        BigInt(n) % BigInt(m)
    ) : n % m;
```