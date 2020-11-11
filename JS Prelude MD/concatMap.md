```javascript
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f =>
    // Concatenated results of a map of f over xs.
    // f is any function which returns a list value.
    // Any empty lists returned are filtered out by
    // the concatenation.
    xs => xs.flatMap(f);
```