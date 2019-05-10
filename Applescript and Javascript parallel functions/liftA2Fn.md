```applescript
-- liftA2Fn :: (a0 -> b -> c) -> (a -> a0) -> (a -> b) -> a -> c
on liftA2Fn(op, f, g)
    -- Lift a binary function to a composition
    -- over two other functions.
    -- liftA2 (*) (+ 2) (+ 3) 7 == 90
    script go
        property mop : mReturn(op)
        property mf : mReturn(f)
        property mg : mReturn(g)
        on |λ|(x)
            |λ|(|λ|(x) of mf, |λ|(x) of mg) of mop
        end |λ|
    end script
end liftA2Fn
```

```js
// liftA2Fn :: (a0 -> b -> c) -> (a -> a0) -> (a -> b) -> a -> c
const liftA2Fn = op => f => g =>
    // Lift a binary function to a composition
    // over two other functions.
    // liftA2 (*) (+ 2) (+ 3) 7 == 90
    x => op(f(x))(g(x));
```