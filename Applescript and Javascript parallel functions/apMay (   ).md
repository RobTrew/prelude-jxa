```applescript
-- Maybe f applied to Maybe x, deriving a Maybe y
```

```applescript
-- apMay (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
on apMay(mf, mx)
    if Nothing of mf or Nothing of mx then
        Nothing()
    else
        Just(|λ|(Just of mx) of mReturn(Just of mf))
    end if
end apMay
```

```js
// Maybe f applied to Maybe x, deriving a Maybe y
```

```js
// apMay (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
const apMay = (mf, mx) =>
    mf.Nothing || mx.Nothing ? (
        Nothing()
    ) : Just(mf.Just(mx.Just));
```