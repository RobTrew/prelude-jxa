```javascript
// isDigit :: Char -> Bool
const isDigit = c => {
    const n = c.codePointAt(0);
    return 48 <= n && 57 >= n;
};
```