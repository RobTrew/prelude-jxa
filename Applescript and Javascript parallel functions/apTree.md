```applescript
-- apTree :: Tree (a -> b) -> Tree a -> Tree b
on apTree(tf, tx)
    set f to mReturn(root of tf)
    
    script apTx
        on |λ|(tg)
            apTree(tg, tx)
        end |λ|
    end script
    
    script fmapf
        on |λ|(xs)
            fmapTree(f, xs)
        end |λ|
    end script
    
    Node(|λ|(root of tx) of f, ¬
        map(fmapf, nest of tx) & map(apTx, nest of tf))
end apTree
```

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