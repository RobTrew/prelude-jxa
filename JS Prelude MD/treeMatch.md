```javascript
// treeMatch :: (a -> Bool) -> Tree a -> [Tree a]
const treeMatch = p => {
    // Either a list containing the the first node
    // in the tree which matches the predicate p,
    // or an empty list if no match is found.
    const go = tree =>
        p(tree.root)
            ? [tree]
            : f(tree.nest);

    const f = xs => {
        const n = xs.length;

        return until(
            ([i, ms]) => (i === n) || (0 < ms.length)
        )(
            ([i]) => [1 + i, go(xs[i])]
        )(
            [0, []]
        )[1];
    };

    return go;
};
```