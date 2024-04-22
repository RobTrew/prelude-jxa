```javascript
// lengthTree :: Tree a -> Int
const lengthTree = tree => {
    // The number of nodes in the tree.
    const go = (n, t) =>
        n + nest(t).reduce(go, 1);

    return go(0, tree);
};
```