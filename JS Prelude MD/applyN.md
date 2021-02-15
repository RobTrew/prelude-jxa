```javascript
// applyN :: Int -> (a -> a) -> a -> a
const applyN = n =>
    // The value of n applications of f to x.
    // (Church numeral n)
    f => x => Array.from({
        length: n
    }, () => f)
    .reduce((a, g) => g(a), x);
```