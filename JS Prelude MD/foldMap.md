```javascript
// foldMap :: Monoid m => (a -> m) -> t a -> m
const foldMap = f => t =>
    // Each element of the structure mapped to a monoid,
    // with the results combined by (<>)
    ({
        Node: () => foldMapTree(f),
        List: () => foldMapList(f)
    })[typeName(t)]()(t);
```