```js
// allTree :: (a -> Bool) -> Tree a -> Bool
const allTree = p =>
    // True if p holds for all nodes of the
    // tree to which allTree(p) is applied.
    foldTree(
        x => xs => p(x) && xs.every(Boolean)
    );
```