```js
// liftA2LR :: (a -> b -> c) -> Either d a -> Either d b -> Either d c
const liftA2LR = (f, a, b) =>
    undefined !== a.Left ? (
        a
    ) : undefined !== b.Left ? (
        b
    ) : Right(f(a.Right, b.Right));
```