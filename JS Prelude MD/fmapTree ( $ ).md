```js
// fmapTree :: (a -> b) -> Tree a -> Tree b
const fmapTree = f =>
    // A new tree. The result of a structure-preserving 
    // application of f to each root in the existing tree.
    tree => {
        const go = x => Node(f(x.root))(
            x.nest.map(go)
        );
        return go(tree);
    };
```