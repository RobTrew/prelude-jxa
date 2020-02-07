```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    // A function over a pair, derived
    // from a curried function.
    (...args) => 1 < args.length ? (
        (x, y) => f(x)(y)
    ) : f(args[0][0])(args[0][1])
```