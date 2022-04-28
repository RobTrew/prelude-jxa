```javascript
// ft :: Int -> Int -> [Int]
const ft = m =>
    // From To.
    // An abbreviation of enumFromTo.
    n => Array.from({
        length: 1 + n - m
    }, (_, i) => m + i);
```