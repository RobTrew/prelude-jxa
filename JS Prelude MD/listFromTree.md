```javascript
// listFromTree :: Tree a -> [a]
const listFromTree = tree => {
    const go = x => [
        root(x),
        ...[].concat(...nest(x).map(go))
    ];

    return go(tree);
};
```