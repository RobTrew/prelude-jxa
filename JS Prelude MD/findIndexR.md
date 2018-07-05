```js
// findIndexR :: (a -> Bool) -> [a] -> Maybe Int
const findIndexR = (p, xs) => {
    const i = reverse(xs).findIndex(p);
    return -1 !== i ? (
        Just(xs.length - (1 + i))
    ) : Nothing();
};
```