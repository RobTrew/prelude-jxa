```applescript
-- bindLR (>>=) :: Either a -> (a -> Either b) -> Either b
on bindLR(m, mf)
    if isRight(m) then
        mReturn(mf)'s |λ|(|Right| of m)
    else
        m
    end if
end bindLR
```

```js
// bindLR (>>=) :: Either a -> (a -> Either b) -> Either b
const bindLR = (m, mf) =>
    m.Right !== undefined ? (
        mf(m.Right)
    ) : m;
```