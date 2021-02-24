```javascript
// unDigits :: [Int] -> Int
const unDigits = ds =>
    // The integer with the given digits.
    ds.reduce((a, x) => (10 * a) + x, 0);
```