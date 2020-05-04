```js
// liftA2Tree :: (a -> b -> c) -> Tree a -> Tree b -> Tree c
const liftA2Tree = f =>
    tx => ty => {
        const go = t =>
            Node(f(t.root)(ty.root))(
                Boolean(ty.nest) ? (
                    ty.nest.map(
                        fmapTree(f(t.root))
                    )
                    .concat(t.nest.map(go))
                ) : []
            );
        return go(tx);
    };
```