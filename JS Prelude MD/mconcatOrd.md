```js
// mconcatOrd :: [Ordering] -> Ordering
const mconcatOrd = cmps =>
    // A sort compare function derived from
    // a list of such functions, providing
    // for composition of n-ary sorts.
    0 < cmps.length ? (
        foldl(
            mappendOrd
        )(cmps[0])(cmps.slice(1))
    ) : compare;
```