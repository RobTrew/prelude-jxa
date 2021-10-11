```javascript
// bindTuple (>>=) :: Monoid a => (a, a) -> (a -> (a, b)) -> (a, b)
const bindTuple = ([a, b]) =>
    f => first(mappend(a))(
        f(b)
    );
```