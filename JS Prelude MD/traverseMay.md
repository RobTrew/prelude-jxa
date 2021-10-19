```javascript
// traverseMay :: Applicative f => (t -> f a) -> Maybe t -> f (Maybe a)
const traverseMay = f => mb =>
    "Nothing" in mb ? (
        [mb]
    ) : fmap(Just)(
        f(mb.Just)
    );
```