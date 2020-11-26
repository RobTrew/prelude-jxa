```javascript
// levels :: Tree a -> [[a]]
const levels = tree =>
    // A list of lists - the gathered root
    // values of each level of the tree.
    cons([tree.root])(
        tree.nest
        .map(levels)
        .reduce(
            uncurry(longZipWith(append)), 
            []
        )
    );
```