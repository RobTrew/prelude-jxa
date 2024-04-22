```javascript
// intToDigit :: Int -> Char
const intToDigit = n =>
    n >= 0 && n < 16
        ? "0123456789ABCDEF".charAt(n)
        : "?";
```