```javascript
// quotRem :: Integral a => a -> a -> (a, a)
const quotRem = m =>
    // The quotient, tupled with the remainder.
    n => Tuple(
        Math.trunc(m / n)
    )(
        m % n
    );
```