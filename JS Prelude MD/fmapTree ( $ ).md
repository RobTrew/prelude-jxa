```js
// fmapTree :: (a -> b) -> Tree a -> Tree b
const fmapTree = f => tree => {
    const go = node => Node(f(node.root))(
        node.nest.map(go)
    );
    return go(tree);
};
```