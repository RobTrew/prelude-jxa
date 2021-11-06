```javascript
// bindLR (>>=) :: Either a ->
// (a -> Either b) -> Either b
const bindLR = m =>
    // The bind operator for Either types.
    mf => "Left" in m ? (
        m
    ) : mf(m.Right);
```


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