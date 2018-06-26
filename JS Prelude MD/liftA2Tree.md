```js
// liftA2Tree :: Tree (a -> b -> c) -> Tree a -> Tree b -> Tree c
const liftA2Tree = (f, tx, ty) => {
    const x = tx.root;
    return Node(
        f(x, ty.root),
        ty.nest.map(ys => fmapTree(curry(f)(x), ys))
        .concat(
            tx.nest.map(t => liftA2Tree(f, t, ty))
        )
    );
};
```