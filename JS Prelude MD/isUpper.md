```javascript
// isUpper :: Char -> Bool
const isUpper = c =>
    // True if c is an upper case character.
    (/\p{Lu}/u).test(c);
```