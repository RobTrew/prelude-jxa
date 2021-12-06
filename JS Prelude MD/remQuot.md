```javascript
// remQuot :: Integral a => a -> a -> (a, a)
const remQuot = m =>
    // The remainder, tupled with the quotient.
    n => Tuple(
        m % n
    )(
        Math.trunc(m / n)
    );
```