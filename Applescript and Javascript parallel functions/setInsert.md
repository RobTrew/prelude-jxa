```applescript
-- setInsert :: Ord a => a -> Set a -> Set a
on setInsert(x, objcSet)
    objcSet's addObject:(x)
    objcSet
end setInsert
```

```js
// setInsert :: Ord a => a -> Set a -> Set a
const setInsert = (x, set) =>
    set.add(x);
```