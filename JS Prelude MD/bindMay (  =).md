```js
// bindMay (>>=) :: Maybe a -> (a -> Maybe b) -> Maybe b
const bindMay = mb => mf =>
    mb.Nothing ? mb : mf(mb.Just);
```