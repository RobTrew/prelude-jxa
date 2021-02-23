```javascript
// listFromTree :: Tree a -> [a]
const listFromTree = tree => {
    const go = x => [
        x.root,
        ...[].concat(...x.nest.map(go))
    ];

    return go(tree);
};
```