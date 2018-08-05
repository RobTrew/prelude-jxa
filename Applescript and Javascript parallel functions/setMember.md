```applescript
-- setMember :: Ord a => a -> Set a -> Bool
on setMember(x, objcSet)
    missing value is not (objcSet's member:(x))
end setMember
```

```js
// setMember :: Ord a => a -> Set a -> Bool
const setMember = (x, set) =>
    set.has(x);
```