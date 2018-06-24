```applescript
-- fromMaybe :: a -> Maybe a -> a
on fromMaybe(d, mb)
    if Nothing of mb then
        def
    else
        Just of mb
    end if
end fromMaybe
```

```js
// fromMaybe :: a -> Maybe a -> a
const fromMaybe = (def, mb) => mb.Nothing ? def : mb.Just;
```