```javascript
// prependToAll :: a -> [a] -> [a]
const prependToAll = sep =>
    // prependToAll(0)([1,2,3]) -> [0, 1, 0, 2, 0, 3]
    xs => 0 < xs.length ? [
        sep, xs[0],
        ...prependToAll(sep)(xs.slice(1))
    ] : [];
```