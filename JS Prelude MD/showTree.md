```javascript
// showTree :: Tree a -> String
const showTree = x =>
    drawTree(
        fmapTree(show)(x)
    );
```