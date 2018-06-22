```applescript
-- drawForest :: Forest String -> Stringon drawForest(trees)	intercalate("\n\n", map(my drawTree, trees))end drawForest
```

```js
// drawForest :: Forest String -> String
const drawForest = trees =>
    trees.map(drawTree).join('\n');
```