```applescript
-- A list of all nodes in the tree which match 
-- a predicate p.
-- For the first match only, see findTree.
-- treeMatches :: (a -> Bool) -> Tree a -> [Tree a]
on treeMatches(p, tree)
    script go
        property pf : mReturn(p)'s |λ|
        on |λ|(x)
            if pf(root of x) then
                {x}
            else
                concatMap(go, nest of x)
            end if
        end |λ|
    end script
    go's |λ|(tree)
end treeMatches
```


```javascript
// treeMatches :: (a -> Bool) -> Tree a -> [Tree a]
const treeMatches = p => {
    // A list of all nodes in the tree which match 
    // a predicate p.
    // For the first match only, see findTree.
    const go = tree =>
        p(tree.root) ? (
            [tree]
        ) : tree.nest.flatMap(go);
    return go;
};
```