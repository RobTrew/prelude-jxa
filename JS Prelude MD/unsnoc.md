```js
// unsnoc :: [a] -> Maybe ([a], a)
const unsnoc = xs =>
    // Nothing if the list is empty, otherwise
    // Just the init and the last.
    (0 < xs.length) ? (
        Just(Tuple(xs.slice(0, -1))(xs.slice(-1)[0]))
    ) : Nothing();
```