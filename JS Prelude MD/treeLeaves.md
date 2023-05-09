```javascript
// treeLeaves :: Tree -> [Tree]
const treeLeaves = tree => {
    const subNest = tree.nest;

    return Boolean(subNest.length) ? (
        subNest.flatMap(treeLeaves)
    ) : [tree];
};
```