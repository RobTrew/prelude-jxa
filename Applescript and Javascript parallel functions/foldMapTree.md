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

```js
// foldMapTree :: Monoid m => (a -> m) -> Tree a -> m
const foldMapTree = (f, node) => {
    const go = x =>
        x.nest.length > 0 ? mappend(
            f(x.root),
            foldl1(mappend, x.nest.map(go))
        ) : f(x.root);
    return go(node);
};
```