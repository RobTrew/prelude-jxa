```javascript
// filteredSubTrees :: (Tree a -> Bool) -> Tree a -> [Tree a]
const filteredSubTrees = p => {
    // SubTrees (within the given tree) which match p.
    const go = tree => (
        p(root(tree))
            ? [tree]
            : []
    )
        .concat(nest(tree).flatMap(go));

    return go;
};
```