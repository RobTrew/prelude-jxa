```js
// bindMay (>>=) :: Maybe a -> (a -> Maybe b) -> Maybe b
const bindMay = mb =>
    // Nothing if mb is Nothing, or the application of the
    // (a -> Maybe b) function mf to the contents of mb.
    mf => mb.Nothing ? (
        mb
    ) : mf(mb.Just);
```