```js
// filteredSubTrees :: (Tree a -> Bool) -> Tree a -> [Tree a]
const filteredSubTrees = p => {
    const go = tree => (
        p(tree.root) ? (
            [tree]
        ) : []
    ).concat(tree.nest.flatMap(go));
    return go;
};
```