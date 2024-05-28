```applescript
-- abs :: Num -> Num
on abs(x)
    -- Absolute value.
    if 0 > x then
        -x
    else
        x
    end if
end abs
```


```javascript
// abs :: Num -> Num
const abs = x =>
    // Absolute value of a given number
    // without the sign.
    0 > x
        ? -x
        : x;
```