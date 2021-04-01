```javascript
// foldMapList :: Monoid m => (a -> m) -> t a -> m
const foldMapList = f =>
    // f mapped over the combined values of a structure.
    xs => 1 < xs.length ? (
        xs.slice(1).reduce(
            (a, x) => mappend(a)(f(x)),
            xs[0]
        )
    ) : xs.map(f);
```