```javascript
// eqDateTime :: Int -> Date -> Date -> Bool
const eqDateTime = n =>
    // Equivalence of two JS Date values
    // at a granularity of n minutes.
    // e.g.
    //  Same minute: eqDateTime(1)(a)(b)
    //    Same hour: eqDateTime(60)(a)(b)
    on(a => b => a === b)(
        flip(div)(6E4 * n)
    );
```