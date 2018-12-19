```js
// elems :: Dict -> [a]
// elems :: Set -> [a]
const elems = x =>
    'Set' !== x.constructor.name ? (
        Object.values(x)
    ) : Array.from(x.values());
```