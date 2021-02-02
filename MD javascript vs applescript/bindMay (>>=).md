```applescript
-- bindMay (>>=) :: Maybe a -> (a -> Maybe b) -> Maybe b
on bindMay(mb, mf)
    -- bindMay provides the mechanism for composing a
    -- sequence of (a -> Maybe b) functions.
    -- If m is Nothing, it is passed straight through.
    -- If m is Just(x), the result is an application
    -- of the (a -> Maybe b) function (mf) to x.
    if Nothing of mb then
        mb
    else
        tell mReturn(mf) to |λ|(Just of mb)
    end if
end bindMay
```


```javascript
// bindMay (>>=) :: Maybe a -> (a -> Maybe b) -> Maybe b
const bindMay = mb =>
    // Nothing if mb is Nothing, or the application of the
    // (a -> Maybe b) function mf to the contents of mb.
    mf => mb.Nothing ? (
        mb
    ) : mf(mb.Just);
```