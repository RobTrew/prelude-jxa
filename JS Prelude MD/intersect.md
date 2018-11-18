```js
// intersect :: (Eq a) => [a] -> [a] -> [a]
const intersect = (xs, ys) => {
    const s = new Set(ys);
    return xs.filter(x => s.has(x));
};
```