```javascript
// kleisliCompose (>=>) :: Monad m => (a -> m b) ->
// (b -> m c) -> (a -> m c)
const kleisliCompose = f =>
    // Kleisli composition of two functions which
    // each lift their values into the same monad.
    g => x => bind(f(x))(g);
```