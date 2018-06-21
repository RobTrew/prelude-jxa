```applescript
-- quotRem :: Int -> Int -> (Int, Int)on quotRem(m, n)	Tuple(m div n, m mod n)end quotRem
```

```js
// quotRem :: Int -> Int -> (Int, Int)
const quotRem = (m, n) => Tuple(Math.floor(m / n), m % n);
```