```applescript
-- insertMap :: Dict -> String -> a -> Dict
on insertMap(rec, k, v)
    set ca to current application
    set nsDct to (ca's NSMutableDictionary's dictionaryWithDictionary:rec)
    nsDct's setValue:v forKey:(k as string)
    nsDct as record
end insertMap
```

```js
// insertMap :: Dict -> String -> a -> Dict
const insertMap = (dct, k, v) =>
  Object.assign(dct, {[k]: v});
```