```javascript
// drawForest :: [Tree String] -> String
const drawForest = trees =>
    trees.map(drawTree).join("\n");
```


```applescript
-- drawForest :: [Tree String] -> String
on drawForest(trees)
    intercalate("\n\n", map(my drawTree, trees))
end drawForest
```