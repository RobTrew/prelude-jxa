```js
// liftA2List :: (a -> b -> c) -> [a] -> [b] -> [c]
const liftA2List = f => xs => ys =>
    // The binary operator f lifted to a function over two
    // lists. f applied to each pair of arguments in the
    // cartesian product of xs and ys.
    concatMap(x => concatMap(y => [f(x)(y)], ys), xs);
```