```js
// liftA2Tree :: (a -> b -> c) -> Tree a -> Tree b -> Tree c
const liftA2Tree = f => tx => ty => {
    const go = tx =>
        Node(f(tx.root, ty.root))(
            Boolean(ty.nest) ? (
                ty.nest.map(
                    fmapTree(f(tx.root))
                )
                .concat(tx.nest.map(go))
            ) : []
        );
    return go(tx);
};
```