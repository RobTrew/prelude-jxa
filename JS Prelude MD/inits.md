```javascript
// inits :: [a] -> [[a]]
// inits :: String -> [String]
const inits = xs =>
    // All prefixes of the argument,
    // shortest first.
    [
        [], ...xs
    ]
    .map((_, i, ys) => ys.slice(0, 1 + i));
```