```javascript
// fmapLR (<$>) :: (a -> b) -> Either a a -> Either a b
const fmapLR = f => lr =>
    "Left" in lr ? (
        lr
    ) : Right(f(lr.Right));
```


```applescript
-- fmapLR (<$>) :: (a -> b) -> Either a a -> Either a b
on fmapLR(f, lr)
    if |Left| of lr is missing value then
        |Right|(|λ|(|Right| of lr) of mReturn(f))
    else
        lr
    end if
end fmapLR
```