```applescript
-- Maybe f applied to Maybe x, deriving a Maybe y
```

```applescript
-- apMaybe (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
on apMaybe(mf, mx)
    if Nothing of mf or Nothing of mx then
        Nothing()
    else
        Just(|λ|(Just of mx) of mReturn(Just of mf))
    end if
end apMaybe
```

```js
// Maybe f applied to Maybe x, deriving a Maybe y
```

```js
// apMaybe (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
const apMaybe = (mf, mx) =>
    mf.Nothing || mx.Nothing ? (
        Nothing()
    ) : Just(mf.Just(mx.Just));
```