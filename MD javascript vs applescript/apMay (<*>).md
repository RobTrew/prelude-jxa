```applescript
-- Maybe f applied to Maybe x, deriving a Maybe y
-- apMay (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
on apMay(mf, mx)
    if Nothing of mf or Nothing of mx then
        Nothing()
    else
        Just(|λ|(Just of mx) of mReturn(Just of mf))
    end if
end apMay
```


```javascript
// apMay (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
const apMay = mf =>
    // Just an application of Maybe a function to
    // to Maybe a value, or Nothing.
    liftA2May(x => x)(mf);
```