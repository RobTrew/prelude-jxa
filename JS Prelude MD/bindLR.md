```javascript
// bindLR (>>=) :: Either a ->
// (a -> Either b) -> Either b
const bindLR = lr =>
    // Bind operator for the Either option type.
    // If lr has a Left value then lr unchanged,
    // otherwise the function mf applied to the
    // Right value in lr.
    mf => "Left" in lr
        ? lr
        : mf(lr.Right);
```