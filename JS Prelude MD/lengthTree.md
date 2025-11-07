```javascript
// lengthTree :: Tree a -> Int
const lengthTree = tree => {
    // The number of nodes in the tree.
    const go = (n, t) => {
        const xs = nest(t);

        return n + (
            0 < xs.length
                ? xs.reduce(go, 1)
                : 1
        );
    };

    return go(0, tree);
};
```