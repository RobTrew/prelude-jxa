```js
// intersect :: (Eq a) => [a] -> [a] -> [a]
const intersect = xs =>
    // The intersection of lists xs and ys.
    ys => xs.filter(x => ys.includes(x));
```