```javascript
// anyTree :: (a -> Bool) -> Tree a -> Bool
const anyTree = p =>
    // True if p holds for any node of the
    // tree to which anyTree(p) is applied.
    foldTree(x => xs => p(x) || xs.some(Boolean));
```