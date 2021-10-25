```javascript
// groupSortBy :: (a -> a -> Ordering) -> [a] -> [[a]]
const groupSortBy = f =>
    // e.g. groupSortBy(comparing(length))
    compose(
        groupBy(a => b => 0 === f(a)(b)),
        sortBy(f)
    );
```