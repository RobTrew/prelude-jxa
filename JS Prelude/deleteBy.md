```js
// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
const deleteBy = (f, x, xs) =>
    0 < xs.length ? (
        f(x, xs[0]) ? (
            xs.slice(1)
        ) : [xs[0]].concat(deleteBy(f, x, xs.slice(1)))
    ) : [];
```