```js
// intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const intersectBy = eq => xs => ys => {
    return (0 < xs.length && 0 < ys.length) ?
    xs.filter(x => ys.some(eq(x))) : [];
};
```