```javascript
// intersperse :: a -> [a] -> [a]
const intersperse = sep =>
    // intersperse(0)([1,2,3]) -> [1, 0, 2, 0, 3]
    xs => 0 < xs.length ? [
        xs[0], ...xs.slice(1)
        .flatMap(x => [sep, x])
    ] : [];
```