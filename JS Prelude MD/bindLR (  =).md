```js
// bindLR (>>=) :: Either a -> (a -> Either b) -> Either b
const bindLR = m => mf =>
    undefined !== m.Left ? (
        m
    ) : mf(m.Right);
```