```applescript
-- assocs :: Map k a -> [(k, a)]
on assocs(m)
    set c to class of m
    if list is c then
        zip(enumFromTo(1, length of m), m)
    else if record is c then
        tell current application to set dict to ¬
            dictionaryWithDictionary_(m) of its NSDictionary
        zip((sortedArrayUsingSelector_("compare:") of ¬
            allKeys() of dict) as list, ¬
            (allValues() of dict) as list)
    else
        {}
    end if
end assocs
```

```js
// assocs :: Map k a -> [(k, a)]
const assocs = m =>
    Object.entries(m).map(
        kv => Tuple(...kv)
    );
```