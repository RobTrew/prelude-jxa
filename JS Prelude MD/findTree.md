```javascript
// findTree :: (a -> Bool) -> Tree a -> Maybe a
const findTree = p => {
    // The first of any nodes in the tree which match
    // the predicate p.
    // (For all matches, see treeMatches)
    const go = tree => {
        const x = tree.root;

        return p(x) ? (
            Just(x)
        ) : (() => {
            const
                xs = tree.nest,
                n = xs.length;

            return Boolean(n) ? until(
                ([i, mb]) => n <= i || ("Just" in mb)
            )(
                ([i]) => [1 + i, go(xs[i])]
            )(
                [0, Nothing()]
            )[1] : Nothing();
        })();
    };

    return go;
};
```