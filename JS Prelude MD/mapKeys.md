```javascript
// mapKeys :: (Key -> Key) -> IntMap a -> IntMap a
const mapKeys = f =>
    // A function mapped over the keys of a record,
    // defining a new record.
    dct => Object.fromEntries(
        Object.entries(dct)
        .map(kv => [f(kv[0]), kv[1]])
    );
```