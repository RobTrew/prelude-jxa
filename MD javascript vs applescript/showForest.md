```applescript
-- showForest :: [Tree a] -> String
on showForest(xs)
    unlines(map(my showTree, xs))
end showForest
```


```javascript
// showForest :: [Tree a] -> String
const showForest = xs =>
    unlines(xs.map(x => drawTree2(false)(true)(
        fmapTree(show)(
            x
        )
    )));
```