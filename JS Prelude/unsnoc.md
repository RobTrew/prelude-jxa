```js
// If the list is empty returns Nothing, otherwise returns 
// Just the init and the last.
```

```js
// unsnoc :: [a] -> Maybe ([a], a)
const unsnoc = xs =>
    (0 < xs.length) ? (
        Just(Tuple(xs.slice(0, -1), xs.slice(-1)[0]))
    ) : Nothing();
```