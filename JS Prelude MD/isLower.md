```javascript
// isLower :: Char -> Bool
const isLower = c =>
// True if c is a lower case character. 
    (/[a-z]/u).test(c);
```