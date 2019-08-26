```js
// showTree :: Tree a -> String
const showTree = x =>
    drawTree2(false)(true)(
        fmapTree(show)(
            x
        )
    );
```