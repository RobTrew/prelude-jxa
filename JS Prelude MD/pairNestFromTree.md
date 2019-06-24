```js
// pairNestFromTree :: Tree a -> PairNest a
const pairNestFromTree = tree => {
    const go = node => [node.root, node.nest.map(go)];
    return go(tree);
};
```