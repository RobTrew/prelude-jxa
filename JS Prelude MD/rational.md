```javascript
// rational :: Num a => a -> Rational
const rational = x =>
    isNaN(x)
        ? x
        : Number.isInteger(x)
            ? Ratio(x)(1)
            : approxRatio(undefined)(x);
```