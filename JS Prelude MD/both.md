```javascript
// both :: (a -> b) -> (a, a) -> (b, b)
const both = f =>
    ([a, b]) => Tuple(
        f(a)
    )(
        f(b)
    );
```