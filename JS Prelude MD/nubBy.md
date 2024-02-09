```javascript
// nubBy :: (a -> a -> Bool) -> [a] -> [a]
const nubBy = pEq =>
    // A sublist of xs from which all duplicates,
    // (as defined by the equality predicate pEq)
    // are excluded.
    xs => xs.reduce(
        (seen, x) => seen.some(pEq(x))
            ? seen
            : seen.concat([x]),
        []
    );
```