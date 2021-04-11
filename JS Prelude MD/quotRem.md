```javascript
// quotRem :: Integral a => a -> a -> (a, a)
const quotRem = m =>
    // The quotient, tupled with the remainder.
    n => Tuple(
        quot(m)(n)
    )(rem(m)(n));
```