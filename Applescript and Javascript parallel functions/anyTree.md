```applescript
-- anyTree :: (a -> Bool) -> Tree a -> Bool
on anyTree(p, tree)
    -- True if p holds for the value of any node in the tree
    script go
        property mp : mReturn(p)'s |λ|
        on |λ|(oNode)
            if mp(root of oNode) then
                true
            else
                repeat with v in nest of oNode
                    if contents of |λ|(v) then return true
                end repeat
                false
            end if
        end |λ|
    end script
    |λ|(tree) of go
end anyTree
```

```js
// anyTree :: (a -> Bool) -> Tree a -> Bool
const anyTree = (p, tree) =>
    foldTree(
        (x, xs) => p(x) || xs.some(Boolean),
        tree
    );
```