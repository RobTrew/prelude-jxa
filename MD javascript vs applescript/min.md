```javascript
// min :: Ord a => a -> a -> a
const min = a =>
    b => b < a ? b : a;
```


```applescript
-- min :: Ord a => a -> a -> a
on min(x, y)
    if y < x then
        y
    else
        x
    end if
end min
```