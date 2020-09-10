```js
// then (>>) :: Monad m => m a -> m b -> m b
const then = ma => mb =>
    (Array.isArray(ma) ? (
        thenList
    ) : isMaybe(ma) ? (
        thenMay
    ) : thenIO)(
        ...[ma, mb]
    );
```