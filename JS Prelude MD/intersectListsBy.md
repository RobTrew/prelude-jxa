```javascript
// intersectListsBy :: (a -> a -> Bool) -> [[a]] -> [a]
const intersectListsBy = eqFn => xs =>
    foldr1(
        (a => x => intersectBy(eqFn)(a)(x))
    )(list(xs));
```