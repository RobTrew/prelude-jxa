```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    // A function over a pair, derived
    // from a curried function.
    (x, y) => f(x)(y);
```