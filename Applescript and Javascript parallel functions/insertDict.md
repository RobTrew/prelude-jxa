```applescript
-- insertDict :: String -> a -> Dict -> Dict
on insertDict(k, v, rec)
    tell (current application's NSMutableDictionary's ¬
        dictionaryWithDictionary:rec)
        its setValue:v forKey:(k as string)
        return it as record
    end tell
end insertDict
```

```js
// insertDict :: String -> a -> Dict -> Dict
const insertDict = (k, v, dct) =>
    Object.assign(dct, {
        [k]: v
    });
```