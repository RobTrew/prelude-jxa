```javascript
// isSpace :: Char -> Bool
const isSpace = c =>
    // True if c is a white space character.
    (/\s/u).test(c);
```