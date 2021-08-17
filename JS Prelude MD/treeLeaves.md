```javascript
// treeLeaves :: Tree -> [Tree]
const treeLeaves = tree => {
    const subNest = tree.nest;

    return 0 < subNest.length ? (
        subNest.flatMap(treeLeaves)
    ) : [tree];
};
```