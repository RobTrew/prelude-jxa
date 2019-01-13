```applescript
-- lookupDict :: a -> Dict -> Maybe b
on lookupDict(k, dct)
    set ca to current application
    set v to (ca's NSDictionary's dictionaryWithDictionary:dct)'s objectForKey:k
    if missing value ≠ v then
        Just(item 1 of ((ca's NSArray's arrayWithObject:v) as list))
    else
        Nothing()
    end if
end lookupDict
```

```js
// lookupDict :: a -> Dict -> Maybe b
const lookupDict = (k, dct) => {
    const v = dct[k];
    return undefined !== v ? (
        Just(v)
    ) : Nothing();
};
```