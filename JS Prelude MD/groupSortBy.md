```javascript
// groupSortBy :: (a -> a -> Ordering) -> [a] -> [[a]]
const groupSortBy = f =>
    xs => compose(
        groupBy(a => b => 0 == f(a)(b)),
        sortBy(f)
    )(list(xs));
```