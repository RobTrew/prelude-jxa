```js
// liftA2Tuple :: (a0 -> b -> c) -> (a, a0) -> (a, b) -> (a, c)
const liftA2Tuple = f => a => b =>
    Tuple(mappend(a[0], b[0]), f(a[1])(b[1]));
```