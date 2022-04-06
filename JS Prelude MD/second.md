```javascript
// second :: (a -> b) -> ((c, a) -> (c, b))
const second = f =>
    // A function over a simple value lifted
    // to a function over a tuple.
    // f (a, b) -> (a, f(b))
    ([x, y]) => [x, f(y)];
```