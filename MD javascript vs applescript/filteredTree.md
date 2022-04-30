```applescript
-- filteredTree (a -> Bool) -> Tree a -> Tree a
on filteredTree(p, tree)
    -- A tree including only those children
    -- which either match the predicate p, or have
    -- descendants which match the predicate p.
    
    script go
        property q : mReturn(p)
        on |λ|(x, xs)
            script test
                on |λ|(subTree)
                    {} ≠ (nest of subTree) or (|λ|(root of subTree) of q)
                end |λ|
            end script
            Node(x, filter(test, xs))
        end |λ|
    end script
    
    foldTree(go, tree)
end filteredTree
```


```javascript
// filteredTree (a -> Bool) -> Tree a -> Tree a
const filteredTree = p =>
    // A tree including only those children
    // which either match the predicate p, or have
    // descendants which match the predicate p.
    foldTree(x => xs =>
        Node(x)(xs.filter(
            tree => (0 < tree.nest.length) || (
                p(tree.root)
            )
        ))
    );
```