```javascript
// levels :: Tree a -> [[a]]
const levels = tree => {
    // A list of lists, grouping the root
    // values of each level of the tree.
    const go = (layers, t) => {
        const
            [
                topLayer, ...lowerLayers
            ] = 0 < layers.length ? layers : [[]];

        return [
            topLayer.concat(t.root),
            ...t.nest.reduce(go, lowerLayers)
        ];
    };

    return go([], tree);
};
```