```javascript
// pathAccessor :: String -> Dict -> (null | Any)
const pathAccessor = path =>
    // Value if any, at supplied dot path in object.
    // Null if no such path is found.
    obj => path.split(".").reduce(
        (v, k) => v
            ? k in v
                ? v[k]
                : null
            : v,
        obj
    );
```