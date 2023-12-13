```javascript
// fmapMay (<$>) :: (a -> b) -> Maybe a -> Maybe b
const fmapMay = f =>
    mb => mb.Nothing
        ? mb
        : Just(f(mb.Just));
```