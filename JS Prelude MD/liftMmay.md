```javascript
// liftMmay :: (a -> b) -> (Maybe a -> Maybe b)
const liftMmay = f =>
    mb => mb.Nothing ? (
        mb
    ) : Just(f(mb.Just));
```