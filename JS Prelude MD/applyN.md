```javascript
// applyN :: Int -> (a -> a) -> a -> a
const applyN = n =>
    // The value of n nested applications of f to x.
    // (Church numeral n)
    f => x => Array.from({ length: n })
    .reduce(f, x)
```