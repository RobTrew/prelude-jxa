```javascript
// div :: Int -> Int -> Int
const div = x =>
    y => Math.floor(x / y);
```


```applescript
-- div :: Int -> Int -> Int
on |div|(a, b)
    set v to (a / b)
    set i to round (v)
    if 0 < (i - v) then
        i - 1
    else
        i
    end if
end |div|
```