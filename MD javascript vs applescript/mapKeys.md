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


```applescript
-- mapKeys :: (Key -> Key) -> IntMap a -> IntMap a
on mapKeys(f, dct)
    script
        property g : mReturn(f)
        on |λ|(kv)
            set {k, v} to kv
            {g's |λ|(k), v}
        end |λ|
    end script
    map(result, zip(keys(dct), elems(dct)))
end mapKeys
```