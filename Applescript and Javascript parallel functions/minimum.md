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

```js
// minimum :: Ord a => [a] -> a
const minimum = xs =>
    xs.length > 0 ? (
        foldl1((a, x) => x < a ? x : a, xs)
    ) : undefined;
```