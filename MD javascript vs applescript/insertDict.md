```applescript
-- insertDict :: String -> a -> Dict -> Dicton insertDict(k, v, rec)    tell current application        tell dictionaryWithDictionary_(rec) of its NSMutableDictionary            its setValue:v forKey:(k as string)            it as record        end tell    end tellend insertDict
```


```javascript
// insertDict :: String -> a -> Dict -> Dict
const insertDict = k => v => dct =>
    Object.assign({}, dct, {
        [k]: v
    });
```