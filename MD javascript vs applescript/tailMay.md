```applescript
-- tailMay :: [a] -> Maybe [a]
on tailMay(xs)
    if xs = {} then
        Nothing()
    else
        Just(rest of xs)
    end if
end tailMay
```


```javascript
// tailMay :: [a] -> Maybe [a]
const tailMay = xs => (
    ys => 0 < ys.length ? (
        Just(ys.slice(1))
    ) : Nothing()
)(list(xs));
```