```applescript
-- deleteKey :: String -> Dict -> Dict
on deleteKey(k, rec)
    tell current application to set nsDct to ¬
        dictionaryWithDictionary_(rec) of its NSMutableDictionary
    removeObjectForKey_(k) of nsDct
    nsDct as record
end deleteKey
```

```js
// deleteKey :: String -> Dict -> Dict
const deleteKey = (k, dct) =>
    (delete dct[k], dct);
```