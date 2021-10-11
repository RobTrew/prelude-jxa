```javascript
// splitArrow (***) :: (a -> b) -> (c -> d) -> ((a, c) -> (b, d))
const splitArrow = f =>
    // The functions f and g combined in a single function
    // from a tuple (x, y) to a tuple of (f(x), g(y))
    // (see bimap)
    g => ([a, b]) => Tuple(
        f(a)
    )(
        g(b)
    );
```