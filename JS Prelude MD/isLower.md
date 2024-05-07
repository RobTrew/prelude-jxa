```javascript
// isLower :: Char -> Bool
const isLower = c =>
    // True if c is a lower case character.
    (/\p{Ll}/u).test(c);
```