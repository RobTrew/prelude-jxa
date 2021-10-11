```javascript
// traverseTuple :: Functor f => (t -> f b) -> (a, t) -> f (a, b)
const traverseTuple = f => ([a, b]) =>
    fmap(Tuple(a))(
        f(b)
    );
```