```javascript
// both :: (a -> b) -> (a, a) -> (b, b)
const both = f =>
    ab => Tuple(
        f(ab[0])
    )(
        f(ab[1])
    );
```