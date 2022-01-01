```javascript
// foldMapTree :: Monoid m => (a -> m) -> Tree a -> m
const foldMapTree = f => {
    // Result of mapping each element of the tree to
    // a monoid, and combining with mappend.
    const go = tree =>
        nest(tree).map(go)
        .reduce(
            uncurry(mappend),
            f(root(tree))
        );

    return go;
};
```