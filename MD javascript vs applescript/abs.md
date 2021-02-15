```javascript
// abs :: Num -> Num
const abs =
    // Absolute value of a given number - without the sign.
    x => Math.abs(x);
```


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