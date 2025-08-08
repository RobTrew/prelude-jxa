```javascript
// bimapLR :: (a -> b) -> (c -> d) -> ֵEither ֵֵa c -> Either b d
const bimapLR = f =>
    // Instance of bimap for Either values.
    // Either the application of f to a Left value,
    // or the application of g to a Right value.
    g => lr => "Left" in lr
        ? Left(f(lr.Left))
        : Right(g(lr.Right));
```