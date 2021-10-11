```javascript
// findTree :: (a -> Bool) -> Tree a -> Maybe Tree a
const findTree = p => {
    // The first of any nodes in the tree which match the predicate p
    // (For all matches, see treeMatches)
    const go = tree =>
        p(tree.root) ? (
            Just(tree)
        ) : (() => {
            const
                xs = tree.nest,
                lng = xs.length;

            return 0 < lng ? until(
                ([i, v]) => lng <= i || !v.Nothing
            )(
                ([i]) => Tuple(1 + i)(
                    go(xs[i])
                )
            )(
                Tuple(0)(
                    Nothing()
                )
            )[1] : Nothing();
        })();

    return go;
};
```