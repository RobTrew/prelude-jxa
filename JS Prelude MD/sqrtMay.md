```javascript
// sqrtMay :: Num -> Maybe Num
const sqrtMay = n =>
    0 > n ? (
        Nothing()
    ) : Just(Math.sqrt(n));
```