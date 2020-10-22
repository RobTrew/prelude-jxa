```javascript
// signum :: Num -> Num
const signum = n =>
    // | Sign of a number.
    // The functions 'abs' and 'signum' should satisfy the law:
    //
    // > abs x * signum x == x
    //
    // For real numbers, the 'signum' is either @-1@ (negative), @0@ (zero)
    // or @1@ (positive).
    0 > n ? (
        -1
    ) : (
        0 < n ? 1 : 0
    );
```