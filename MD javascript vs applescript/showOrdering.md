```javascript
// showOrdering :: Ordering -> String
const showOrdering = e =>
    0 < e.value ? (
        'GT'
    ) : 0 > e.value ? (
        'LT'
    ) : 'EQ';
```


```applescript
-- showOrdering :: Ordering -> String
on showOrdering(e)
    set v to value of e
    if v > 0 then
        "GT"
    else if v < 0 then
        "LT"
    else
        "EQ"
    end if
end showOrdering
```