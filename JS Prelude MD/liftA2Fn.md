```javascript
// liftA2Fn :: (a0 -> b -> c) -> (a -> a0) -> (a -> b) -> a -> c
const liftA2Fn = op =>
    // Lift a binary function to a composition
    // over two other functions.
    // liftA2 (*) (+ 2) (+ 3) 7 == 90
    f => g => x => op(f(x))(
        g(x)
    );
```