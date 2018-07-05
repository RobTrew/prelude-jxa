```applescript
-- insertMap :: Dict -> String -> a -> Dict
on insertMap(rec, k, v)
    tell (current application's NSMutableDictionary's ¬
        dictionaryWithDictionary:rec)
        its setValue:v forKey:(k as string)
        return it as record
    end tell
end insertMap
```

```js
// insertMap :: Dict -> String -> a -> Dict
const insertMap = (dct, k, v) =>
  Object.assign(dct, {[k]: v});
```