```javascript
// lengthTree :: Tree a -> Int
const lengthTree = tree =>
    // The count of nodes in a given tree.
    foldTree(
        () => xs => xs.reduce(
            (a, x) => a + x, 1
        )
    )(tree);
```