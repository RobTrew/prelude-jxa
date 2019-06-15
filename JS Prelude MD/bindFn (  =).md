```js
// bindFn (>>=) :: (a -> b) -> (b -> a -> c) -> a -> c
const bindFn = (f, bop) =>
    // Binary operator applied over f x and x.
    x => bop(f(x), x);
```