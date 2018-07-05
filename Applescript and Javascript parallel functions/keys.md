```applescript
-- keys :: Dict -> [String]
on keys(rec)
    (current application's NSDictionary's dictionaryWithDictionary:rec)'s allKeys() as list
end keys
```

```js
// keys :: Dict -> [String]
const keys = Object.keys;
```