```javascript
// elemAtMay :: Int -> Dict -> Maybe (String, a)
// elemAtMay :: Int -> [a] -> Maybe a
const elemAtMay = i =>
    // Just the item at the indexed position in an array,
    // or in the lexically sorted key-values of a dict,
    // or Nothing, if the index is out of range.
    x => {
        const
            bln = Array.isArray(x),
            k = bln ? i : Object.keys(x)
            .sort()[i],
            v = x[k];
        return undefined !== v ? (
            Just(bln ? v : Tuple(k, v))
        ) : Nothing();
    };
```