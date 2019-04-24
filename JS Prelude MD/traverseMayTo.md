```js
// traverseMayTo :: Applicative f => (t -> f a) -> Maybe t -> f (Maybe a)
const traverseMayTo = (t, f, mb) =>
    mb.Nothing ? (
        pureT(t)(Nothing())
    ) : fmap(Just, f(mb.Just));
```