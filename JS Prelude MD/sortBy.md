```javascript
// sortBy :: (a -> a -> Ordering) -> [a] -> [a]
const sortBy = f =>
    // A copy of xs sorted by the comparator function f.
    xs => xs.toSorted(
        (a, b) => f(a)(b)
    );
```