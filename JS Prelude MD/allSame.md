```javascript
// allSame :: [a] -> Bool
const allSame = xs =>
    // True if no items in xs have differing values.
    2 > xs.length || (
        h => xs.slice(1).every(x => h === x)
    )(xs[0]);
```