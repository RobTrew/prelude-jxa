```applescript
-- intersection :: Ord a => Set a -> Set a -> Set a
on intersection(a, b)
    set s to current application's NSMutableSet's alloc's init()
    s's setSet:(a)
    s's intersectSet:(b)
    return s
end intersection
```

```js
// intersection :: Ord a => Set a -> Set a -> Set a
const intersection = (s, s1) =>
    new Set([...s].filter(x => s1.has(x)));
```