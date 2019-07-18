```applescript
-- A list of all nodes in the tree which match 
-- a predicate p.
-- For the first match only, see findTree.
```

```applescript
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

```js
// A list of all nodes in the tree which match 
// a predicate p.
// For the first match only, see findTree.
```

```js
// treeMatches :: (a -> Bool) -> Tree a -> [Tree a]
const treeMatches = (p, tree) => {
    const go = node =>
        p(node.root) ? (
            [node]
        ) : node.nest.flatMap(go);
    return go(tree);
};
```