```javascript
// headMay :: [a] -> Maybe a
const headMay = xs =>
    // Just the first item of xs, or
    // Nothing if xs is an empty list.
    0 < xs.length ? (
        Just(xs[0])
    ) : Nothing();
```


```applescript
-- headMay :: [a] -> Maybe a
on headMay(xs)
    if xs = {} then
        Nothing()
    else
        Just(item 1 of xs)
    end if
end headMay
```