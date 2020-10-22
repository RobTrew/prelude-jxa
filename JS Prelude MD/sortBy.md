```javascript
// sortBy :: (a -> a -> Ordering) -> [a] -> [a]
const sortBy = f =>
    xs => list(xs).slice()
    .sort((a, b) => f(a)(b));
```