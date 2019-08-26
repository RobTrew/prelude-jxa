```js
// If x is a dictionary, then the Int is read as an 
// index into the lexically sorted keys of the Dict, 
// returning a Maybe (Key, Value) pair.
// If x is a list, then returns a Maybe a.
// (In either case, returns Nothing for an Int out of range)
```

```js
// elemAtMay :: Int -> Dict -> Maybe (String, a)
// elemAtMay :: Int -> [a] -> Maybe a
const elemAtMay = i => x => {
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