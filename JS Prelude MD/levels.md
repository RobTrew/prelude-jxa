```javascript
// levels :: Tree a -> [[a]]
const levels = tree => {
    // A list of lists, grouping the root
    // values of each level of the tree.
    const go = (a, node) => {
        const [h, ...t] = 0 < a.length ? a : [
            []
        ];

        return [
            [node.root, ...h],
            ...node.nest.reduceRight(go, t)
        ];
    };

    return go([], tree);
};
```