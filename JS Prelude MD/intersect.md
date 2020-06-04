```js
// intersect :: (Eq a) => [a] -> [a] -> [a]
const intersect = xs =>
    // The intersection of lists xs and ys.
    ys => {
        const dct = ys.reduce((a, x) => (a[x] = 1, a), {})
        return list(xs).filter(x => dct[x]);
    };
```