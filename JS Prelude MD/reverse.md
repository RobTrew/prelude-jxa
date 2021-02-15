```javascript
// reverse :: [a] -> [a]
const reverse = xs =>
    "string" === typeof xs ? (
        xs.split("").reverse()
        .join("")
    ) : xs.slice(0).reverse();
```