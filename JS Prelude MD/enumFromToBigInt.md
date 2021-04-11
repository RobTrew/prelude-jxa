```javascript
// enumFromToBigInt :: Int -> Int -> [Integer]
const enumFromToBigInt = m =>
    n => Array.from({
        length: 1 + n - m
    }, (_, i) => BigInt(m + i));
```