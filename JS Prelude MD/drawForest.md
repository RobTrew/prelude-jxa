```javascript
// drawForest :: [Tree String] -> String
const drawForest = trees =>
    trees.map(drawTree).join('\n');
```