```applescript
-- fromMaybe :: a -> Maybe a -> a
on fromMaybe(default, mb)
    if Nothing of mb then
        default
    else
        Just of mb
    end if
end fromMaybe
```


```javascript
// fromMaybe :: a -> Maybe a -> a
const fromMaybe = def =>
    mb => mb.Nothing ? def : mb.Just;
```