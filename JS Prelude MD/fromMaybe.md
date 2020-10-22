```javascript
// fromMaybe :: a -> Maybe a -> a
const fromMaybe = def =>
    mb => mb.Nothing ? def : mb.Just;
```