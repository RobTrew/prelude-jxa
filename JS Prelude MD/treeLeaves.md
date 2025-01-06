```javascript
// treeLeaves :: Tree a -> [Tree a]
const treeLeaves = tree => {
    const go = t => {
        const xs = nest(t);

        return 0 < xs.length
            ? xs.flatMap(go)
            : [t];
    };

    return go(tree);
};
```