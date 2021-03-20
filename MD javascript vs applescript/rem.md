```applescript
-- rem :: Int -> Int -> Int
on rem(m, n)
    m mod n
end rem
```


```javascript
// rem :: Int -> Int -> Int
const rem = n =>
    // Inherits the sign of the *dividend* for non-zero
    // results. Compare with `mod`, which inherits
    // the sign of the *divisor*.
    m => n % m;
```