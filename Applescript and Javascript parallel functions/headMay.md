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

```js
// headMay :: [a] -> Maybe a
const headMay = xs =>
    0 < xs.length ? Just(xs[0]) : Nothing();
```