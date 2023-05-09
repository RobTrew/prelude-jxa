```javascript
// intercalate :: [a] -> [[a]] -> [a]
const intercalate = sep =>
    // Flattened interspersal of a list between
    // the elements of a list of lists.
    xs => intersperse(sep)(xs).flat();
```