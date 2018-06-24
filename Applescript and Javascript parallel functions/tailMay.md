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

```js
// tailMay :: [a] -> Maybe [a]
const tailMay = xs =>
    xs.length > 0 ? (
        Just(xs.slice(1))
    ) : Nothing();
```