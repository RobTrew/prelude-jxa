```js
// apTree :: Tree (a -> b) -> Tree a -> Tree b
const apTree = (tf, tx) => {
    const f = tf.root;
    return Node(
        f(tx.root),
        tx.nest.map(xs => fmapTree(f, xs))
        .concat(
            tf.nest.map(g => apTree(g, tx))
        )
    );
};
```