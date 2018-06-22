```js
// drawForest :: Forest String -> String
const drawForest = trees =>
    trees.map(drawTree).join('\n');
```