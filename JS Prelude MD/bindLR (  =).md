```js
// bindLR (>>=) :: Either a -> (a -> Either b) -> Either b
const bindLR = (m, mf) =>
    m.Right !== undefined ? (
        mf(m.Right)
    ) : m;
```