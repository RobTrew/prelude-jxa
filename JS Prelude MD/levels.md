```javascript
// levels :: Tree a -> [[a]]
const levels = tree => {
    // A list of lists, grouping the root
    // values of each level of the tree.
    const go = (layers, t) => {
        const
            [x, ...xs] = (
                0 < layers.length
            )
                ? layers
                : [[]];

        return [
            x.concat(root(t)),
            ...nest(t).reduce(go, xs)
        ];
    };

    return go([], tree);
};
```