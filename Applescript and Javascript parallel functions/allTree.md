```applescript
-- allTree :: (a -> Bool) -> Tree a -> Bool
on allTree(p, tree)
    -- True if p holds for the value of every node in tree
    script go
        property mp : mReturn(p)'s |λ|
        on |λ|(oNode)
            if mp(root of oNode) then
                repeat with v in nest of oNode
                    if not (contents of |λ|(v)) then return false
                end repeat
                true
            else
                false
            end if
        end |λ|
    end script
    |λ|(tree) of go
end allTree
```

```js
// allTree :: (a -> Bool) -> Tree a -> Bool
const allTree = (p, tree) =>
    foldTree(
        (x, xs) => p(x) && xs.every(Boolean),
        tree
    );
```