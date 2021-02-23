```javascript
// isAlpha :: Char -> Bool
const isAlpha = c =>
    (/[A-Za-z\u00C0-\u00FF]/u).test(c);
```