```javascript
// foldMapList :: Monoid m => (a -> m) -> t a -> m
const foldMapList = f =>
    // f mapped over the combined values of a structure.
    xs => 0 < xs.length ? (
        foldl1(
            compose(mappend, f)
        )(xs)
    ) : [];

```