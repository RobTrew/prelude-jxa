```javascript
// adjust :: (a -> a) -> Key ->
// Dict Key a -> Dict Key a
const adjust = f =>
    // The orginal dictionary, unmodified, if k is
    // not an existing key.
    // Otherwise, a new copy in which the existing
    // value of k is updated by application of f.
    k => dict => k in dict ? (
        Object.assign({}, dict, {
            [k]: f(dict[k])
        })
    ) : dict;
```