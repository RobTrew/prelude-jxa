```js
// traverseTuple :: Functor f => (t -> f b) -> (a, t) -> f (a, b)
const traverseTuple = (f, tpl) =>
    fmap(curry(Tuple)(tpl[0]), f(tpl[1]));
```