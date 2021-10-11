```javascript
// bimap :: (a -> b) -> (c -> d) -> (a, c) -> (b, d)
const bimap = f =>
    // Tuple instance of bimap.
    // A tuple of the application of f and g to the
    // first and second values respectively.
    g => ([a, b]) => Tuple(f(a))(g(b));
```