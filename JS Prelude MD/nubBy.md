```javascript
// nubBy :: (a -> a -> Bool) -> [a] -> [a]
const nubBy = p =>
    // A sublist of xs from which all duplicates,
    // (as defined by the equality predicate p)
    // are excluded.
    xs => Array.from(
        xs.reduce(
            (seen, x) => seen.has(p(x))
                ? seen
                : seen.add(x),
            new Set()
        )
    );
```