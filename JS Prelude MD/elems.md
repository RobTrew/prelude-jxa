```javascript
// elems :: Map k a -> [a]
// elems :: Set a -> [a]
const elems = x =>
    "Set" !== x.constructor.name ? (
        Object.values(x)
    ) : Array.from(x.values());
```