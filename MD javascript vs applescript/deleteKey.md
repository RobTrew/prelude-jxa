```javascript
// deleteKey :: String -> Dict -> Dict
const deleteKey = k =>
    // A new dictionary, without the key k.
    dict => {
        const d = { ...dict };

        return (delete d[k], d);
    };
```


```applescript
-- deleteKey :: String -> Dict -> Dict
on deleteKey(k, rec)
    tell current application to set nsDct to ¬
        dictionaryWithDictionary_(rec) of its NSMutableDictionary
    removeObjectForKey_(k) of nsDct
    nsDct as record
end deleteKey
```