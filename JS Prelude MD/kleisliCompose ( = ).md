```js
// Kleisli composition LR
```

```js
// kleisliCompose (>=>) :: Monad m => 
// (a -> m b) -> (b -> m c) -> (a -> m c)
const kleisliCompose = f => g =>
    x => bind(f(x))(
        g
    );
```