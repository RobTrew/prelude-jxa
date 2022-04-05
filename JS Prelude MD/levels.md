```javascript
// levels :: Tree a -> [[a]]
const levels = tree => {
    // A list of lists, grouping the root
    // values of each level of the tree.
    const go = (a, x) => {
        const [h, ...t] = Boolean(a.length) ? a : [
            []
        ];

        return [
            [root(x), ...h],
            ...nest(x).reduceRight(go, t)
        ];
    };
```