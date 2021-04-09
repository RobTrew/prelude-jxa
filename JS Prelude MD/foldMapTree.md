```javascript
// foldMapTree :: Monoid m => (a -> m) -> Tree a -> m
const foldMapTree = f => {
    // Result of mapping each element of the tree to
    // a monoid, and combining with mappend.
    const go = tree => {
        const
            x = root(tree),
            xs = nest(tree);

        return 0 < xs.length ? (
            mappend(
                f(x)
            )(
                foldl1(mappend)(xs.map(go))
            )
        ) : f(x);
    };

    return go;
};
```