```javascript
// filterTree (a -> Bool) -> Tree a -> [a]
const filterTree = p =>
    // List of all values in the tree
    // which match the predicate p.
    foldTree(x => xs =>
        (
            p(x) ? [
                [x], ...xs
            ] : xs
        ).flat(1)
    );
```