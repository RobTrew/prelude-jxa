```js
// apFn :: (a -> b -> c) -> (a -> b) -> a -> c
const apFn = f =>
    // Applicative instance for functions.
    // f(x) applied to g(x).
    g => x => f(x)(
        g(x)
    )
```