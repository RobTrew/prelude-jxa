```javascript
// unsnoc :: [a] -> Maybe ([a], a)
const unsnoc = xs =>
    // Nothing if the list is empty, otherwise
    // Just the init and the last.
    Boolean(xs.length) ? (
        Just(Tuple(xs.slice(0, -1))(xs.slice(-1)[0]))
    ) : Nothing();
```