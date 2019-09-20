```js
// showTree :: Tree a -> String
const showTree = x =>
    drawTree2(false)(true)(
        fmap(show)(x)
    );
```