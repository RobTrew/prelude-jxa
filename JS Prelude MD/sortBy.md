```javascript
// sortBy :: (a -> a -> Ordering) -> [a] -> [a]
const sortBy = f =>
    // A copy of xs sorted by the comparator function f.
    xs => [...xs].sort(
        (a, b) => f(a)(b)
    );
```