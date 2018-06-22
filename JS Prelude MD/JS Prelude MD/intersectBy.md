```js
// intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const intersectBy = (eq, xs, ys) => {
    const ceq = curry(eq);
    return (xs.length > 0 && ys.length > 0) ?
    xs.filter(x => ys.some(ceq(x))) : [];
};
```