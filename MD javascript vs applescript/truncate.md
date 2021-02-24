```applescript
-- truncate :: Num -> Int
on truncate(x)
    item 1 of properFraction(x)
end truncate
```


```javascript
// truncate :: Num -> Int
const truncate = x =>
    "Ratio" === x.type ? (
        properFracRatio(x)[0]
    ) : properFraction(x)[0];
```