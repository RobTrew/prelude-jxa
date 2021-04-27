```applescript
-- unionSet :: Ord a => Set a -> Set a -> Set a
on unionSet(s, s1)
    set sUnion to current application's NSMutableSet's alloc's init()
    sUnion's setSet:(s)
    sUnion's unionSet:(s1)
    return sUnion
end unionSet
```


```javascript
// unionSet :: Ord a => Set a -> Set a -> Set a
const unionSet = s => s1 =>
    Array.from(s1.values())
    .reduce(
        (a, x) => (a.add(x), a),
        new Set(s)
    );
```