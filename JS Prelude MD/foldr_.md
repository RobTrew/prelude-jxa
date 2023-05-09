```javascript
// foldr_ :: (a -> b -> b) -> b -> t a -> b
const foldr_ = f =>
    // Reduction of a structure, in terms of a binary
    // operator, from right to left.
    // A generic foldr, applicable to trees as well
    // as to lists.
    z => t => appEndo(
        foldMap(
            compose(Endo, f)
        )(t)
    )(z);
```