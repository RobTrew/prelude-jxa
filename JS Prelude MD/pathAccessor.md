```javascript
// pathAccessor :: String -> Dict -> a
const pathAccessor = path =>
    // Value if any, at supplied dot path in object.
    // Null if no such path is found.
    obj => path.split(".").reduce(
        (v, k) => v instanceof Object
            ? k in v
                ? v[k]
                : undefined
            : v,
        obj
    );
```