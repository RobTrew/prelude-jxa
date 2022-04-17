```applescript
-- showRatio :: Ratio -> String
on showRatio(r)
    set s to (n of r as string)
    set d to d of r
    if 1 ≠ d then
        s & "/" & (d as string)
    else
        s
    end if
end showRatio
```


```javascript
// showRatio :: Ratio -> String
const showRatio = r =>
    "Ratio" !== r.type ? (
        r.toString()
    ) : r.n.toString() + (
        1 !== r.d ? (
            `/${r.d}`
        ) : ""
    );
```