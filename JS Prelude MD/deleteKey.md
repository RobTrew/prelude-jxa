```javascript
// deleteKey :: String -> Dict -> Dict
const deleteKey = k =>
    // A new dictionary, without the key k.
    dict => {
        const d = { ...dict };

        return (delete d[k], d);
    };
```