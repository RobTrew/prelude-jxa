```applescript
-- liftA2Tree :: Tree (a -> b -> c) -> Tree a -> Tree b -> Tree c
on liftA2Tree(f, tx, ty)
    
    script fx
        on |λ|(y)
            |λ|(root of tx, y) of mReturn(f)
        end |λ|
    end script
    
    script fmapT
        on |λ|(t)
            fmapTree(fx, t)
        end |λ|
    end script
    
    script liftA2T
        on |λ|(t)
            liftA2Tree(f, t, ty)
        end |λ|
    end script
    
    Node(|λ|(root of tx, root of ty) of mReturn(f), ¬
        map(fmapT, nest of ty) & map(liftA2T, nest of tx))
end liftA2Tree
```

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