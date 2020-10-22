```javascript
// mappendMaybe (<>) :: Maybe a -> Maybe a -> Maybe a
const mappendMaybe = a =>
     b => a.Nothing ? (
        b
    ) : b.Nothing ? (
        a
    ) : Just(
        mappend(a.Just)(
            b.Just
        )
    );
```


```applescript
-- mappendMaybe (<>) :: Maybe a -> Maybe a -> Maybe a
on mappendMaybe(a, b)
    if Nothing of a then
        b
    else if Nothing of b then
        a
    else
        Just(mappend(Just of a, Just of b))
    end if
end mappendMaybe
```