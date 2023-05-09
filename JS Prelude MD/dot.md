```javascript
// dot (.) :: (b -> c) -> (a -> b) -> a -> c
const dot = f =>
    // The composition of two functions.
    g => x => f(g(x));
```