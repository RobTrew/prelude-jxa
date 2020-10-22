```javascript
// setInsert :: Ord a => a -> Set a -> Set a
const setInsert = x => oSet =>
    oSet.add(x);
```


```applescript
-- setInsert :: Ord a => a -> Set a -> Set a
on setInsert(x, objcSet)
    objcSet's addObject:(x)
    objcSet
end setInsert
```