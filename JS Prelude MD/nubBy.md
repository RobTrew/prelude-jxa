```javascript
// nubBy :: (a -> a -> Bool) -> [a] -> [a]
const nubBy = p =>
    // A sublist of xs from which all duplicates,
    // (as defined by the equality predicate p)
    // are excluded.
    xs => xs.reduce(
        (seen, x) => seen.some(p(x))
            ? seen
            : seen.concat([x]),
        []
    );
```