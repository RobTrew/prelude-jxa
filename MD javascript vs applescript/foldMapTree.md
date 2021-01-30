```javascript
// foldMapTree :: Monoid m => (a -> m) -> Tree a -> m
const foldMapTree = f => {
    // Result of mapping each element of the tree to
    // a monoid, and combining with mappend.
    const go = tree =>
        0 < tree.nest.length ? (
            mappend(
                f(tree.root)
            )(
                foldl1(mappend)(
                    tree.nest.map(go)
                )
            )
        ) : f(tree.root);
    return go;
};
```


```applescript
-- foldMapTree :: Monoid m => (a -> m) -> Tree a -> m
on foldMapTree(f, tree)
    script go
        property g : mReturn(f)'s |λ|
        on |λ|(x)
            if length of (nest of x) > 0 then
                mappend(g(root of x), ¬
                    foldl1(my mappend, (map(go, nest of x))))
            else
                g(root of x)
            end if
        end |λ|
    end script
    |λ|(tree) of go
end foldMapTree
```