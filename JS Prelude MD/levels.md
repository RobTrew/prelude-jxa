```javascript
// levels :: Tree a -> [[a]]
const levels = tree => {
    // A list of lists, grouping the root
    // values of each level of the tree.
    const go = (a, x) => {
        const
            [h, ...t] = 0 < a.length ? (
                a
            ) : [[]];

        return [
            h.concat(x.root),
            ...x.nest.reduce(go, t)
        ];
    };

    return go([], tree);
};
```