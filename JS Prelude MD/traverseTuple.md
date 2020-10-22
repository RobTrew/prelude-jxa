```javascript
// traverseTuple :: Functor f => (t -> f b) -> (a, t) -> f (a, b)
const traverseTuple = f => tpl =>
    fmap(Tuple(tpl[0]))(
        f(tpl[1])
    );
```