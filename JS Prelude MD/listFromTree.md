```javascript
// listFromTree :: Tree a -> [a]
const listFromTree = tree => {
    const go = x => [
      x.root,
      ...[].concat.apply([], x.nest.map(go))
    ];
    return go(tree);
};
```