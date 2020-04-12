```js
// groupSortBy :: (a -> a -> Ordering) -> [a] -> [[a]]
const groupSortBy = f =>
    compose(
        groupBy(a => b => 0 == f(a)(b)),
        sortBy(f)
    );
```