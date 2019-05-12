```js
// apFn :: (a -> b -> c) -> (a -> b) -> a -> c
const apFn = f =>
    // Applicative instance for functions.
    g => x => f(x)(g(x))
```