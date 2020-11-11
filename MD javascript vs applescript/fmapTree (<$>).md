```applescript
-- fmapTree :: (a -> b) -> Tree a -> Tree b
on fmapTree(f, tree)
    script go
        property g : |λ| of mReturn(f)
        on |λ|(x)
            set xs to nest of x
            if xs ≠ {} then
                set ys to map(go, xs)
            else
                set ys to xs
            end if
            Node(g(root of x), ys)
        end |λ|
    end script
  |λ|(tree) of go
end fmapTree
```


```javascript
// fmapTree :: (a -> b) -> Tree a -> Tree b
const fmapTree = f => {
    // A new tree. The result of a 
    // structure-preserving application of f 
    // to each root in the existing tree.
    const go = t => Node(
        f(t.root)
    )(
        t.nest.map(go)
    );
    return go;
};
```