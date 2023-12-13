```javascript
// both :: (a -> b) -> (a, a) -> (b, b)
const both = f =>
    // A tuple obtained by separately
    // applying f to each of the two
    // values in the given tuple.
    ([a, b]) => Tuple(
        f(a)
    )(
        f(b)
    );
```