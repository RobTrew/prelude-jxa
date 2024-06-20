```javascript
// fromMaybe :: a -> Maybe a -> a
const fromMaybe = v =>
    mb => "Nothing" in mb
        ? v
        : mb.Just;
```


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