```javascript
// mappendOrd (<>) :: Ordering -> Ordering -> Ordering
const mappendOrd = x =>
    y => 0 !== x ? (
        x
    ) : y;
```


```applescript
-- mappendOrd (<>) :: Ordering -> Ordering -> Ordering
on mappendOrd(a, b)
    if 0 ≠ a then
        a
    else
        b
    end if
end mappendOrd
```