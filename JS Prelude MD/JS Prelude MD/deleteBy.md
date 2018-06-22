```js
// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
const deleteBy = (f, x, xs) =>
    xs.length > 0 ? (
        f(x, xs[0]) ? (
            xs.slice(1)
        ) : [xs[0]].concat(deleteBy(f, x, xs.slice(1)))
    ) : [];
```