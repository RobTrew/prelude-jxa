```javascript
// mapKeys :: (Key -> Key) -> IntMap a -> IntMap a
const mapKeys = f =>
    // A function mapped over the keys of a record.
    dct => mapFromList(
        map(kv => [f(read(kv[0]))(kv[1])])(
            zip(keys(dct))(
                elems(dct)
            )
        )
    );
```