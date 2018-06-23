```applescript
-- assocs :: Map k a -> [(k, a)]on assocs(m)	set c to class of m	if c is list then	  zip(enumFromTo(1, length of m), m)	else if c is record then		set dict to (current application's ¬			NSDictionary's ¬			dictionaryWithDictionary:(m))		zip((dict's allKeys()'s ¬			sortedArrayUsingSelector:"compare:") as list, ¬			dict's allValues() as list)	else		{}	end ifend assocs
```

```js
// assocs :: Map k a -> [(k, a)]
const assocs = m =>
    Object.keys(m).sort().map(k => Tuple(k, m[k]));
```