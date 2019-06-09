```js
// find :: (a -> Bool) -> [a] -> Maybe a
const find = (p, xs) => {
    const i = xs.findIndex(p);
    return -1 !== i ? (
        Just(xs[i])
    ) : Nothing();
};
```