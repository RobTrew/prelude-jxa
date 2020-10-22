```js
// traverseMay :: Applicative f => (t -> f a) -> Maybe t -> f (Maybe a)
const traverseMay = f => mb =>
    mb.Nothing ? (
        [mb]
    ) : fmap(Just)(
        f(mb.Just)
    );
```