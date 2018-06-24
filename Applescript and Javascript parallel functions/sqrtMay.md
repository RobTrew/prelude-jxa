```applescript
-- sqrtMay :: Num -> Maybe Num
on sqrtMay(n)
    if n ≥ 0 then
        Just(n ^ (1 / 2))
    else
        Nothing()
    end if
end sqrtMay
```

```js
// sqrtMay :: Num -> Maybe Num
const sqrtMay = n =>
    0 > n ? (
        Nothing()
    ) : Just(Math.sqrt(n));
```