```javascript
// intersectListsBy :: (a -> a -> Bool) -> [[a]] -> [a]
const intersectListsBy = eqFn =>
    foldr1(intersectBy(eqFn));
```