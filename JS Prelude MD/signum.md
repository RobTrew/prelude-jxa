```javascript
// signum :: Num -> Num
const signum = n =>
    // | Sign of a number.
    n.constructor(
        0 > n ? (
            -1
        ) : (
            0 < n ? 1 : 0
        )
    );
```