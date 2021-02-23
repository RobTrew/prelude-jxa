```javascript
// foldMapTree :: Monoid m => (a -> m) -> Tree a -> m
const foldMapTree = f => {
    // Result of mapping each element of the tree to
    // a monoid, and combining with mappend.
    const go = tree =>
        0 < tree.nest.length ? (
            mappend(
                f(tree.root)
            )(
                foldl1(mappend)(
                    tree.nest.map(go)
                )
            )
        ) : f(tree.root);

    return go;
};
```