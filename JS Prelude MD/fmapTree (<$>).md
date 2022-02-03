```javascript
// fmapTree :: (a -> b) -> Tree a -> Tree b
const fmapTree = f => {
    // A new tree. The result of a
    // structure-preserving application of f
    // to each root in the existing tree.
    const go = t => Node(
        f(root(t))
    )(
        nest(t).map(go)
    );

    return go;
};
```