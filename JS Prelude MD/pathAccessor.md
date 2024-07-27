```javascript
// pathAccessor :: String -> Dict -> (null | Any)
const pathAccessor = path =>
    obj => path.split(".").reduce(
        (result, k) => result
            ? k in result
                ? result[k]
                : null
            : result,
        obj
    );
```