```js
// intersect :: (Eq a) => [a] -> [a] -> [a]
const intersect = xs =>
    // The intersection of lists xs and ys.
    ys => {
        const s = new Set(list(ys));
        return list(xs).filter(x => s.has(x));
    };
```