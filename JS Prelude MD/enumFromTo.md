```javascript
// enumFromTo :: Int -> Int -> [Int]
const enumFromTo = m =>
    n => !isNaN(m) ? (
        Array.from({
            length: 1 + n - m
        }, (_, i) => m + i)
    ) : enumFromTo_(m)(n);
```