```applescript
-- deleteMap :: k -> Dict -> Dicton deleteMap(k, rec)	set nsDct to (current application's ¬		NSMutableDictionary's dictionaryWithDictionary:rec)	nsDct's removeObjectForKey:(k)	nsDct as recordend deleteMap
```

```js
// deleteMap :: k -> Dict -> Dict
const deleteMap = (k, dct) =>
    (delete dct[k], dct);
```