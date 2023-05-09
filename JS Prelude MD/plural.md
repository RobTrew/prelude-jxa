```javascript
// plural :: String -> Int -> String
const plural = k =>
    // Singular or plural EN inflection
    // of a given word.
    n => 1 !== n ? (
        `${k}s`
    ) : k;
```