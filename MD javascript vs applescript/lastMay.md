```javascript
// lastMay :: [a] -> Maybe a
const lastMay = xs =>
    Boolean(xs.length) ? (
        Just(xs.slice(-1)[0])
    ) : Nothing();
```


```applescript
-- lastMay :: [a] -> Maybe a
on lastMay(xs)
    if length of xs > 0 then
        Just(item -1 of xs)
    else
        Nothing()
    end if
end lastMay
```