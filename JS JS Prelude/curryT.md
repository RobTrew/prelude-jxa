```js
// curryT :: ((a, b) -> c) -> a -> b -> c
const curryT = f =>
    // Curried function over a tuple.
    // curryT(Just)(7)(8) -> Just((7, 8))
    a => b => f(Tuple(a)(b));
```