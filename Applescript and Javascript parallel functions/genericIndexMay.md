```applescript
-- genericIndexMay :: [a] -> Int -> Maybe a
on genericIndexMay(xs, i)
    if i < (length of xs) and i ≥ 0 then
        Just(item (i + 1) of xs)
    else
        Nothing()
    end if
end genericIndexMay
```

```js
// genericIndexMay :: [a] -> Int -> Maybe a
const genericIndexMay = (xs, i) =>
    (i < xs.length && i >= 0) ? Just(xs[i]) : Nothing();
```