```applescript
-- foldTree :: (a -> [b] -> b) -> Tree a -> b
on foldTree(f, tree)
    script go
        property g : mReturn(f)
        on |λ|(oNode)
            tell g to |λ|(root of oNode, map(go, nest of oNode))
        end |λ|
    end script
    |λ|(tree) of go
end foldTree
```


```javascript
// foldTree :: (a -> [b] -> b) -> Tree a -> b
const foldTree = f => {
    // The catamorphism on trees. A summary
    // value obtained by a depth-first fold.
    const go = tree => f(tree.root)(
        tree.nest.map(go)
    );
    return go;
};
```