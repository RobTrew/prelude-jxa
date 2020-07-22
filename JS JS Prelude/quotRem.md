```js
// quotRem :: Int -> Int -> (Int, Int)
const quotRem = m => n => 
  Tuple(Math.trunc(m / n))(
      m % n
  );
```