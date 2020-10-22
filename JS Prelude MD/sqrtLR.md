```javascript
// sqrtLR :: Num -> Either String Num
const sqrtLR = n =>
    0 > n ? (
        Left('Square root of negative number: ' + n)
    ) : Right(Math.sqrt(n));
```