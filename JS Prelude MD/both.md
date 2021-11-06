```javascript
// both :: (a -> b) -> (a, a) -> (b, b)
const both = f =>
    // A tuple obtained by applying f to both values
    // in the given tuple.
    ([a, b]) => Tuple(
        f(a)
    )(
        f(b)
    );
```