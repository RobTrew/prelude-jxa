```js
// deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const deleteFirstsBy = (fnEq, xs, ys) =>
    ys.reduce((x, y) => deleteBy(fnEq, y, x), xs);
```