```javascript
// liftA2List :: (a -> b -> c) -> [a] -> [b] -> [c]
const liftA2List = op =>
    // The binary operator f lifted to a function over two
    // lists. op applied to each pair of arguments in the
    // cartesian product of xs and ys.
    xs => ys => list(xs).flatMap(
        x => list(ys).map(f(x))
    );
```