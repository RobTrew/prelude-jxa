```javascript
// deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const deleteFirstsBy = fEq =>
    // The first list purged of the first instance of
    // each predicate-matching element in the second list.
    foldl(flip(deleteBy(fEq)));
```