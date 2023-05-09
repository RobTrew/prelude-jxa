```javascript
// replicate :: Int -> a -> [a]
const replicate = n =>
    // A list of n copies of x.
    x => Array.from({
        length: n
    }, () => x);
```