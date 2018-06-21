```js
// lookupDict :: a -> Dict -> Maybe b
const lookupDict = (k, dct) => {
    const v = dct[k];
    return v !== undefined ? (
        Just(v)
    ) : Nothing();
};
```