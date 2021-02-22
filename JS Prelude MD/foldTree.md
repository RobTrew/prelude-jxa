```javascript
// foldTree :: (a -> [b] -> b) -> Tree a -> b
const foldTree = f => {
    // The catamorphism on trees. A summary
    // value obtained by a depth-first fold.
    const go = tree => f(
        root(tree)
    )(
        nest(tree).map(go)
    );

    return go;
};
```