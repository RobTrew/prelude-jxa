```applescript
-- deleteKey :: String -> Dict -> Dict
on deleteKey(k, rec)
    tell current application to set nsDct to ¬
        dictionaryWithDictionary_(rec) of its NSMutableDictionary
    removeObjectForKey_(k) of nsDct
    nsDct as record
end deleteKey
```


```javascript
// deleteKey :: String -> Dict -> Dict
const deleteKey = k =>
    // A new dictionary, without the key k.
    dct => {
        const dct2 = Object.assign({}, dct);
        return (delete dct2[k], dct2);
    };
```