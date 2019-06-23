```js
// allTree :: (a -> Bool) -> Tree a -> Bool
const allTree = (p, tree) =>
    foldTree(
        (x, xs) => p(x) && xs.every(Boolean),
        tree
    );
```