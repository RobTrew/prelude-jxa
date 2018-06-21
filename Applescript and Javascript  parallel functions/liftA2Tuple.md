```applescript
-- liftA2Tuple :: Monoid m => (a -> b -> c) -> (m, a) -> (m, b) -> (m, c)on liftA2Tuple(f, a, b)	Tuple(mappend(|1| of a, |1| of b), mReturn(f)'s |λ|(|2| of a, |2| of b))end liftA2Tuple
```

```js
// liftA2Tuple :: Monoid m => (a -> b -> c) -> (m, a) -> (m, b) -> (m, c)
const liftA2Tuple = (f, a, b) =>
    Tuple(mappend(a[0], b[0]), f(a[1], b[1]));
```