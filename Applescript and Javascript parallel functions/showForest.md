```applescript
-- showForest :: [Tree a] -> String
on showForest(xs)
    unlines(map(showTree, xs))
end showForest
```

```js
// showForest :: [Tree a] -> String
const showForest = xs =>
    unlines(xs.map(x => drawTree2(false)(true)(
        fmapTree(show, x)
    )));
```