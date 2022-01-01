```javascript
// foldrTree2 :: (a -> b -> b) -> b -> t a -> b
const foldrTree2 = f =>
    // A derivation of foldrTree
    // from foldMapTree
    z => t => appEndo(
        foldMapTree(
            compose(Endo, f)
        )(t)
    )(z);
```