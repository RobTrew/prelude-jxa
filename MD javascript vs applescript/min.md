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


```javascript
// min :: Ord a => a -> a -> a
const min = a => 
    b => b < a ? b : a;
```