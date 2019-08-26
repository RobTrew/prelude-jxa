```js
// fmapLR (<$>) :: (a -> b) -> Either a a -> Either a b
const fmapLR = f => lr =>
    undefined === lr.Left ? (
        Right(f(lr.Right))
    ) : lr;
```