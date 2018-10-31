```applescript
-- assocs :: Map k a -> [(k, a)]
on assocs(m)
    set c to class of m
    if list is c then
        zip(enumFromTo(1, length of m), m)
    else if record is c then
        set dict to (current application's ¬
            NSDictionary's ¬
            dictionaryWithDictionary:(m))
        zip((dict's allKeys()'s ¬
            sortedArrayUsingSelector:"compare:") as list, ¬
            dict's allValues() as list)
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