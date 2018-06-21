```js
// foldTree :: (a -> [b] -> b) -> Tree a -> b
const foldTree = (f, tree) => {
    const go = node => f(node.root, node.nest.map(go));
    return go(tree);
};
```