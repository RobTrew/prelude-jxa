```js
// apTree :: Tree (a -> b) -> Tree a -> Tree b
const apTree = (tf, tx) => {
    const go = t =>
        Node(
            t.root(tx.root),
            tx.nest.map(curry(fmapTree)(t.root))
            .concat(
                t.nest.map(go)
            )
        );
    return go(tf)
};
```