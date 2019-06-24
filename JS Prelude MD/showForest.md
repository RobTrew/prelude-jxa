```js
// showForest :: [Tree a] -> String
const showForest = xs =>
    xs.map(x => drawTree2(false)(true)(
        fmapTree(show, x)
    ));
```