```js
// liftA2LR :: (a -> b -> c) -> Either d a -> Either d b -> Either d c
const liftA2LR = (f, a, b) =>
    a.Right !== undefined ? (
        b.Right !== undefined ? (
            Right(f(a.Right, b.Right))
        ) : b
    ) : a;
```