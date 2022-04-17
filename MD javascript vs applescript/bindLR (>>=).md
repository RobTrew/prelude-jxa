```applescript
-- bindLR (>>=) :: Either a -> (a -> Either b) -> Either b
on bindLR(m, mf)
    if missing value is not |Left| of m then
        m
    else
        mReturn(mf)'s |λ|(|Right| of m)
    end if
end bindLR
```


```javascript
// bindLR (>>=) :: Either a ->
// (a -> Either b) -> Either b
const bindLR = lr =>
    // Bind operator for the Either option type.
    // If lr has a Left value then lr unchanged,
    // otherwise the function mf applied to the
    // Right value in lr.
    mf => "Left" in lr ? (
        lr
    ) : mf(lr.Right);
```