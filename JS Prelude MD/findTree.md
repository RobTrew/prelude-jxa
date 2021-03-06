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
                tpl => lng <= tpl[0] || !tpl[1].Nothing
            )(
                tpl => Tuple(1 + tpl[0])(
                    go(xs[tpl[0]])
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