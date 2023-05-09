```javascript
// mconcatOrd :: [Ordering] -> Ordering
const mconcatOrd = cmps =>
    // A sort compare function derived from
    // a list of such functions, providing
    // for composition of n-ary sorts.
    Boolean(cmps.length) ? (
        foldl(
            mappendOrd
        )(cmps[0])(cmps.slice(1))
    ) : compare;
```