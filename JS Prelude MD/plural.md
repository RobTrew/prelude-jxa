```javascript
// plural :: Int -> String -> String
const plural = n =>
    // Singular or plural EN inflection
    // of a given word, preceded by digits.
    k => 1 === n
        ? `${k}`
        : `${k}s`;
```