```applescript
-- member :: Key -> Dict -> Boolon member(k, dct)	((current application's ¬		NSDictionary's dictionaryWithDictionary:dct)'s ¬		objectForKey:k) is not missing valueend member
```

```js
// member :: Key -> Dict -> Bool
const member = (k, dct) => k in dct;
```