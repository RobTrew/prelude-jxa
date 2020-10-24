```javascript
// plural :: Int -> String -> String
const plural = n =>
    k => 1 !== n ? (
        `${k}s`
    ) : k;
```