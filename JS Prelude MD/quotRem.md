```js
// quotRem :: Int -> Int -> (Int, Int)
const quotRem = m =>
    // The quotient, tupled with the remainder.
    n => Tuple(
        Math.trunc(m / n)
    )(m % n);
```