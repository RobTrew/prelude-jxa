```javascript
// insertWith :: Ord k => (a -> a -> a) ->
// k -> a -> Map k a -> Map k a
const insertWith = f =>
    // A new dictionary updated with a (k, f(v)(x)) pair.
    // Where there is no existing v for k, the supplied
    // x is used directly.
    k => x => dict => ({
        ...dict,
        [k]: k in dict
            ? f(dict[k])(x)
            : x
    });
```