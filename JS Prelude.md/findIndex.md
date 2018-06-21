```js
// findIndex :: (a -> Bool) -> [a] -> Maybe Int
const findIndex = (p, xs) => {
    const i = xs.findIndex(p);
    return -1 !== i ? (
        Just(i)
    ) : Nothing();
};
```