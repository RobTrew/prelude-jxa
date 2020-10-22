```javascript
// isAlphaNum :: Char -> Bool
const isAlphaNum = c => {
    const n = c.codePointAt(0);
    return (48 <= n && 57 >= n) || (
        /[A-Za-z\u00C0-\u00FF]/.test(c)
    );
};
```