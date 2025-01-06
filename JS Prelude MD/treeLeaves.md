```javascript
// treeLeaves :: Tree -> [Tree]
const treeLeaves = tree => {
    const xs = nest(tree);

    return 0 < xs.length
        ? xs.flatMap(treeLeaves)
        : [tree];
};
```