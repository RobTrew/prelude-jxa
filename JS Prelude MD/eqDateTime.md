```javascript
// eqDateTime :: Int -> Date -> Date -> Bool
const eqDateTime = n =>
    // Equivalence of two JS DateTime values
    // at a granularity of n minutes.
    // e.g.
    //  Same minute: eqDateTime(1)
    //  Same hour:   eqDateTime(60)
    on(a => b => a === b)(
        x => Math.floor(x / (
            0 < n ? (
                (6E4 * n) + 1
            ) : 1
        ))
    );
```