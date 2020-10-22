```js
// bindFn (>>=) :: (a -> b) -> (b -> a -> c) -> a -> c
const bindFn = f =>
    // Binary operator applied over f x and x.
    bop => x => bop(f(x))(x);
```