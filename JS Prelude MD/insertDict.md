```javascript
// insertDict :: String -> a -> Dict -> Dict
const insertDict = k =>
    v => dict => ({
        ...dict,
        [k]: v
    });
```