```applescript
-- filterTree (a -> Bool) -> Tree a -> [a]
on filterTree(p, tree)
    -- List of all values in the tree
    -- which match the predicate p.
    
    script go
        property q : mReturn(p)'s |λ|
        on |λ|(x, xs)
            if q(x) then
                {x} & concat(xs)
            else
                concat(xs)
            end if
        end |λ|
    end script
    
    foldTree(go, tree)
end filterTree
```


```javascript
// filterTree (a -> Bool) -> Tree a -> [a]
const filterTree = p =>
    // List of all values in the tree
    // which match the predicate p.
    foldTree(x => xs => concat(
        p(x) ? [
            [x], ...xs
        ] : xs
    ));
```