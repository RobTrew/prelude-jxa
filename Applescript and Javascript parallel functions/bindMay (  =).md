```applescript
-- bindMay (>>=) :: Maybe a -> (a -> Maybe b) -> Maybe bon bindMay(mb, mf)	if Nothing of mb then		mb	else		tell mReturn(mf) to |λ|(Just of mb)	end ifend bindMay
```

```js
// bindMay (>>=) :: Maybe a -> (a -> Maybe b) -> Maybe b
const bindMay = (mb, mf) =>
    mb.Nothing ? mb : mf(mb.Just);
```