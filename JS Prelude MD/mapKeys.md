```js
// A function mapped over the keys of a record
```

```js
// A function mapped over the keys of a record
// mapKeys :: (Key -> Key) -> IntMap a -> IntMap a
const mapKeys = f => dct =>
    mapFromList(
        map(kv => [f(read(kv[0]))(kv[1])])(
            zip(keys(dct))(
                elems(dct)
            )
        )
    );
```