```javascript
// quot :: Integral a => a -> a -> a
const quot = n =>
    m => [n, m].some(isBigInt) ? (
        BigInt(n) / BigInt(m)
    ) : Math.trunc(n / m);
```