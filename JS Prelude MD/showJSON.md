```javascript
// showJSON :: a -> String
const showJSON = x =>
    // Indented JSON representation of the value x.
    JSON.stringify(x, null, 2);
```