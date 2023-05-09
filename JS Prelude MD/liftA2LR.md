```javascript
// liftA2LR :: (a -> b -> c) -> Either d a -> Either d b -> Either d c
const liftA2LR = f =>
    // The binary function f lifted to a
    // function over two Either values.
    a => b => bindLR(a)(
        x => bindLR(b)(
            compose(Right, f(x))
        )
    );
```