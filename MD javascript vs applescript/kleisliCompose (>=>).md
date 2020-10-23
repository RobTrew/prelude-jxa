```applescript
-- Kleisli composition LR
-- kleisliCompose (>=>) :: Monad m => (a -> m b) -> (b -> m c) -> (a -> m c)
on kleisliCompose(f, g)
    script
        on |λ|(x)
            bind(mReturn(f)'s |λ|(x), g)
        end |λ|
    end script
end kleisliCompose
```


```javascript
// kleisliCompose (>=>) :: Monad m => (a -> m b) ->
// (b -> m c) -> (a -> m c)
const kleisliCompose = f =>
    // Kleisli composition of two functions which
    // each lift their values into the same monad.
    g => x => bind(f(x))(g);
```