```javascript
// foldlTree :: (b -> a -> b) -> b -> Tree a -> b
const foldlTree = f =>
    // A top-down left-right 
    // accumulating traversal.
    acc => node => {
        const go = (a, x) =>
            x.nest.reduce(go, f(a)(x.root));
        return go(acc, node);
    };
```


```applescript
-- foldlTree :: (b -> a -> b) -> b -> Tree a -> b
on foldlTree(f, acc, tree)
    script go
        property mf : mReturn(f)
        on |λ|(a, x)
            foldl(go, |λ|(a, root of x) of mf, nest of x)
        end |λ|
    end script
    |λ|(acc, tree) of go
end foldlTree
```