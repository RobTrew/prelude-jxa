```javascript
// enumFromTo :: Int -> Int -> [Int]
const enumFromTo = m =>
    // Enumeration of the integers from m to n.
    n => Array.from(
        {length: 1 + n - m},
        (_, i) => m + i
    );
```