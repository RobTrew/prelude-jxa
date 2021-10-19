```javascript
// bindLR (>>=) :: Either a ->
// (a -> Either b) -> Either b
const bindLR = m =>
    mf => "Left" in m ? (
        m
    ) : mf(m.Right);
```