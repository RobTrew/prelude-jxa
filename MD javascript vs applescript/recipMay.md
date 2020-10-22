```javascript
// recipMay :: Num -> Maybe Num
const recipMay = n =>
    0 === n ? (
        Nothing()
    ) : Just(1 / n);
```


```applescript
-- recipMay :: Num -> Maybe Num
on recipMay(n)
    if n ≠ 0 then
        Just(1 / n)
    else
        Nothing()
    end if
end recipMay
```