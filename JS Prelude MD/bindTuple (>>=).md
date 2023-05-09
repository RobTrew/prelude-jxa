```javascript
// bindTuple (>>=) :: Monoid a => (a, a) -> (a -> (a, b)) -> (a, b)
const bindTuple = ([a, b]) =>
    // The bind operator for Tuples
    f => first(mappend(a))(
        f(b)
    );
```