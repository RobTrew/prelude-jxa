```javascript
// sort :: Ord a => [a] -> [a]
const sort = xs =>
    // An A-Z sorted copy of xs.
    xs.slice().sort(
        (a, b) => a < b ? (
            -1
        ) : (
            a > b ? (
                1
            ) : 0
        )
    );
```