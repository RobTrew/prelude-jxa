```javascript
// bindLR (>>=) :: Either a ->
// (a -> Either b) -> Either b
const bindLR = m =>
    // The bind operator for Either types.
    mf => "Left" in m ? (
        m
    ) : mf(m.Right);
```