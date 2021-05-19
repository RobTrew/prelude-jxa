```javascript
// showTree :: Tree a -> String
const showTree = x =>
    drawTree(
        fmapTree(show)(x)
    );
```


```applescript
-- showTree :: Tree a -> String
on showTree(tree)
    script str
        on |λ|(x)
            x as string
        end |λ|
    end script
    drawTree2(false, true, fmapTree(str, tree))
end showTree
```