```js
// liftA2Tuple :: Monoid m => (a -> b -> c) -> (m, a) -> (m, b) -> (m, c)
const liftA2Tuple = f => a => b =>
    Tuple(mappend(a[0], b[0]), f(a[1])(b[1]));
```