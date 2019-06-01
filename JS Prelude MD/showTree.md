```js
// showTree :: Tree a -> String
const showTree = x =>
    drawTree(fmap(JSON.stringify, x));
```