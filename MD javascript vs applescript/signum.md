```javascript
// signum :: Num -> Num
const signum = n =>
    // Sign of a number.
    n.constructor(
        0 > n
            ? -1
            : 0 < n
                ? 1
                : 0
    );
```


```applescript
-- signum :: Num -> Num
on signum(x)
    if x < 0 then
        -1
    else if x = 0 then
        0
    else
        1
    end if
end signum
```