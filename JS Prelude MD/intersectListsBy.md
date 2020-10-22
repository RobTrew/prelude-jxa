```javascript
// intersectListsBy :: (a -> a -> Bool) -> [[a]] -> [a]
const intersectListsBy = eq => xs =>
    foldr1((a => x => intersectBy(eq)(a)(x)))(
        list(xs)
    );
```