```js
// intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const intersectBy = (eq, xs, ys) => {
    const ceq = curry(eq);
    return (0 < xs.length && 0 < ys.length) ?
    xs.filter(x => ys.some(ceq(x))) : [];
};
```