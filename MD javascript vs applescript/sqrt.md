```javascript
// sqrt :: Num -> Num
const sqrt = n =>
    (0 <= n) ? Math.sqrt(n) : undefined;
```


```applescript
-- sqrt :: Num -> Num
on sqrt(n)
    if 0 <= n then
        n ^ (1 / 2)
    else
        missing value
    end if
end sqrt
```