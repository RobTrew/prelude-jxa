```applescript
-- sqrtLR :: Num -> Either String Num
on sqrtLR(n)
    if 0 ≤ n then
        |Right|(n ^ (1 / 2))
    else
        |Left|("Square root of negative number: " & n)
    end if
end sqrtLR
```


```javascript
// sqrtLR :: Num -> Either String Num
const sqrtLR = n =>
    0 > n ? (
        Left('Square root of negative number: ' + n)
    ) : Right(Math.sqrt(n));
```