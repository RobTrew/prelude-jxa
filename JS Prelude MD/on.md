```javascript
// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
const on = f =>
    // e.g. groupBy(on(eq)(length))
    g => a => b => f(g(a))(g(b));
```