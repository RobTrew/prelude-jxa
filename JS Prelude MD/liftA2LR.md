```js
// liftA2LR :: (a -> b -> c) -> Either d a -> Either d b -> Either d c
const liftA2LR = f =>
    a => b => bindLR(a)(
        x => bindLR(b)(
            compose(Right, f(x))
        )
    );
```