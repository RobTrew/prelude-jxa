```applescript
-- max :: Ord a => a -> a -> a
on max(x, y)
    if gt(x, y) then
        x
    else
        y
    end if
end max
```

```js
// max :: Ord a => a -> a -> a
const max = (a, b) => gt(b, a) ? b : a;
```