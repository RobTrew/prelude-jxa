```javascript
// fmapLR (<$>) :: (a -> b) -> Either a a -> Either a b
const fmapLR = f => lr =>
    "Left" in lr ? (
        lr
    ) : Right(f(lr.Right));
```