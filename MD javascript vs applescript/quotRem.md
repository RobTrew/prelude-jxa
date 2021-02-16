```applescript
-- quotRem :: Int -> Int -> (Int, Int)
on quotRem(m, n)
    Tuple(m div n, m mod n)
end quotRem
```


```javascript
// quotRem :: Int -> Int -> (Int, Int)
const quotRem = m =>
    // The quotient, tupled with the remainder.
    n => Tuple(
        Math.trunc(m / n)
    )(m % n);
```