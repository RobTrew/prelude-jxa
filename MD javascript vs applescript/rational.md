```javascript
// rational :: Num a => a -> Rational
const rational = x =>
    isNaN(x) ? x : Number.isInteger(x) ? (
        Ratio(x)(1)
    ) : approxRatio(undefined)(x);
```


```applescript
-- rational :: Num a => a -> Rational
on rational(x)
    set c to class of x
    if integer is c then
        ratio(x, 1)
    else if real is c then
        approxRatio(missing value, x)
    else
        x
    end if
end rational
```