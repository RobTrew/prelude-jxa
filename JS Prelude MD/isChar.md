```javascript
// isChar :: a -> Bool
const isChar = x =>
    ('string' === typeof x) && (1 === x.length);
```