```js
// toListTree :: Tree a -> [a]
const toListTree = tree => {
    const go = x => [
      x.root,
      ...[].concat.apply([], x.nest.map(go))
    ];
    return go(tree);
};
```