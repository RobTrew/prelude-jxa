```javascript
// liftA2Tuple :: Monoid m =>
// (a -> b -> c) -> (m, a) -> (m, b) -> (m, c)
const liftA2Tuple = f =>
    ([a, b]) => ([c, d]) => Tuple(
        mappend(a)(c)
    )(
        f(b)(d)
    );
```