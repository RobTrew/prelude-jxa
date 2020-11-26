```javascript
// levels :: Tree a -> [[a]]
const levels = tree =>
    // A list of lists, grouping the 
    // root values of each level 
    // of the tree.
    cons([tree.root])(
        tree.nest
        .map(levels)
        .reduce(
            uncurry(zipWithLong(append)),
            []
        )
    );
```