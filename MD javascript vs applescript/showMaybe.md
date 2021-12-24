```applescript
-- showMaybe :: Maybe a -> String
on showMaybe(mb)
    if Nothing of mb then
        "Nothing"
    else
        "Just " & unQuoted(show(Just of mb))
    end if
end showMaybe
```


```javascript
// showMaybe :: Maybe a -> String
const showMaybe = mb =>
    mb.Nothing ? (
        "Nothing"
    ) : `Just(${unQuoted(show(mb.Just))})`;
```