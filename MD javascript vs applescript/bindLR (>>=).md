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
const bindLR = m =>
    mf => undefined !== m.Left ? (
        m
    ) : mf(m.Right);
```