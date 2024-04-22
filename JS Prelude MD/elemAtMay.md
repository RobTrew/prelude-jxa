```javascript
// elemAtMay :: Int -> Dict -> Maybe (String, a)
// elemAtMay :: Int -> [a] -> Maybe a
const elemAtMay = i =>
    // Just the item at the indexed position in an array,
    // or in the lexically sorted key-values of a dict,
    // or Nothing, if the index is out of range.
    obj => {
        const
            vs = Array.isArray(obj)
                ? obj
                : Object.entries(obj).sort(
                    (a, b) => b[0].localeCompare(a[0])
                );

        return (0 <= i) && (i < vs.length)
            ? Just(vs[i])
            : Nothing();
    };
```