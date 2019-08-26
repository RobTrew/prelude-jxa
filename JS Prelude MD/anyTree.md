```js
// anyTree :: (a -> Bool) -> Tree a -> Bool
const anyTree = p => tree =>
    foldTree(x => xs => p(x) || xs.some(Boolean))(
        tree
    );
```