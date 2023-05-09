```javascript
// sum :: [Num] -> Num
const sum = xs =>
    // The numeric sum of all values in xs.
    xs.reduce((a, x) => a + x, 0);
```