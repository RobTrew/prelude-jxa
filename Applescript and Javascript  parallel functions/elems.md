```applescript
-- elems :: Dict -> [a]on elems(rec)	set ca to current application	(ca's NSDictionary's dictionaryWithDictionary:rec)'s allValues() as listend elems
```

```js
// elems :: Dict -> [a]
const elems = Object.values;
```