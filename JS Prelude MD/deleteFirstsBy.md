```javascript
// deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const deleteFirstsBy = fEq =>
    // The first list purged of the first instance of
    // each predicate-matching element in the second list.
    xs => targets => {
        const d = deleteBy(fEq);

        return targets.reduce(
            (a, t) => d(t)(a),
            xs
        );
    };
```