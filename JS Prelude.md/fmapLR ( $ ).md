```js
// fmapLR (<$>) :: (a -> b) -> Either a a -> Either a b
const fmapLR = (f, lr) =>
    Object.keys(lr)
    .includes('Right') ? (
        Right(f(lr.Right))
    ) : lr;
```