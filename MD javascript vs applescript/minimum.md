```javascript
// minimum :: Ord a => [a] -> a
const minimum = xs => (
    // The least value of xs.
    ys => 0 < ys.length ? (
        ys.slice(1)
        .reduce((a, y) => y < a ? y : a, ys[0])
    ) : undefined
)(list(xs));
```


```applescript
-- minimum :: Ord a => [a] -> a
on minimum(xs)
    set lng to length of xs
    if lng < 1 then return missing value
    set m to item 1 of xs
    repeat with x in xs
        set v to contents of x
        if v < m then set m to v
    end repeat
    return m
end minimum
```