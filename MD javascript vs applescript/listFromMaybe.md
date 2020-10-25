```applescript
-- listFromMaybe :: Maybe a -> [a]
on listFromMaybe(mb)
    -- A singleton list derived from a Just value, 
    -- or an empty list derived from Nothing.
    if Nothing of mb then
        {}
    else
        {Just of mb}
    end if
end maybeToList
```


```javascript
// listFromMaybe :: Maybe a -> [a]
const listFromMaybe = mb =>
    // A singleton list derived from a Just value, 
    // or an empty list derived from Nothing.
    mb.Nothing ? [] : [mb.Just];
```