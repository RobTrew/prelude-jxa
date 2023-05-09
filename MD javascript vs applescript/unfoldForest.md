```javascript
// unfoldForest :: (b -> (a, [b])) -> [b] -> [Tree]
const unfoldForest = f =>
    // A forest built from a list of seed values.
    xs => xs.map(unfoldTree(f));
```


```applescript
-- unfoldForest :: (b -> (a, [b])) -> [b] -> [Tree]
on unfoldForest(f, xs)
    -- | Build a forest from a list of seed values
    set g to mReturn(f)
    script
        on |λ|(x)
            unfoldTree(g, x)
        end |λ|
    end script
    map(result, xs)
end unfoldForest
```