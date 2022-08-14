```javascript
// findTree :: (a -> Bool) -> Tree a -> Maybe Tree a
const findTree = p => {
    // The first of any nodes in the tree which match
    // the predicate p.
    // (For all matches, see treeMatches)
    const go = tree =>
        p(tree.root) ? (
            Just(tree)
        ) : (() => {
            const
                xs = tree.nest,
                n = xs.length;

            return Boolean(n) ? until(
                ([i, mb]) => n <= i || !("Nothing" in mb)
            )(
                ([i]) => [1 + i, go(xs[i])]
            )(
                [0, Nothing()]
            )[1] : Nothing();
        })();

    return go;
};
```