```javascript
// bindLR (>>=) :: Either a ->
// (a -> Either b) -> Either b
const bindLR = m =>
    mf => m.Left ? (
        m
    ) : mf(m.Right);
```