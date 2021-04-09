```javascript
// liftA2List :: (a -> b -> c) -> [a] -> [b] -> [c]
const liftA2List = op =>
    // The binary operator op applied to each pair of arguments 
    // in the cartesian product of xs and ys.
    // A binary operator lifed to a function over two lists. 
    xs => ys => list(xs).flatMap(
        x => list(ys).map(op(x))
    );
```