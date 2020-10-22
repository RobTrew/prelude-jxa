```js
// unfoldForest :: (b -> (a, [b])) -> [b] -> [Tree]
const unfoldForest = f =>
    // A forest built from a list of seed values.
    xs => xs.map(unfoldTree(f));
```