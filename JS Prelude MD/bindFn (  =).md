```js
// bindFn (>>=) :: (a -> b) -> (b -> a -> c) -> a -> c
const bindFn = (f, bop) =>
    // Where either bop or f is a binary operator.
    x => curry(bop)(curry(f)(x))(x)
```