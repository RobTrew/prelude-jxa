```javascript
// first :: (a -> b) -> ((a, c) -> (b, c))
const first = f =>
    // A function over a simple value lifted
    // to a function over a tuple, with f
    // applied to the first term.
    // f (a, b) -> (f(a), b)
    ([x, y]) => Tuple(f(x))(y);
```