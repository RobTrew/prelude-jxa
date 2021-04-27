```javascript
// foldrTree :: (a -> b -> b) -> b -> Tree a -> b
const foldrTree = f =>
    acc => node => {
        const go = (a, x) =>
            f(x.root)(
                x.nest.reduceRight(go, a)
            );

        return go(acc, node);
    };
```


```applescript
-- foldrTree :: (a -> b -> b) -> b -> Tree a -> b
on foldrTree(f, acc, tree)
    script go
        property mf : mReturn(f)
        on |λ|(x, a)
            foldr(go, |λ|(root of x, a) of mf, nest of x)
        end |λ|
    end script
    |λ|(tree, acc) of go
end foldrTree
```