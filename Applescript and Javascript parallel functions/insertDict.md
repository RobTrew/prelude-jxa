```applescript
-- insertDict :: Dict -> String -> a -> Dict
on insertDict(rec, k, v)
    tell (current application's NSMutableDictionary's ¬
        dictionaryWithDictionary:rec)
        its setValue:v forKey:(k as string)
        return it as record
    end tell
end insertDict
```

```js
// insertDict :: Dict -> String -> a -> Dict
const insertDict = (dct, k, v) =>
  Object.assign(dct, {[k]: v});
```