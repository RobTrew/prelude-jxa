```js
// filterTree (a -> Bool) -> Tree a -> [a]
const filterTree = p =>
    // List of all root values in the tree 
    // which match the predicate p.
    foldTree(x => xs =>
        concat(p(x) ? [x, ...xs] : xs)
    )
```