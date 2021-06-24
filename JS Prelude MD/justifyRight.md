```javascript
// justifyRight :: Int -> Char -> String -> String
const justifyRight = n =>
    // The string s, preceded by enough padding (with
    // the character c) to reach the string length n.
    c => s => Boolean(s) ? (
        s.padStart(n, c)
    ) : "";
```