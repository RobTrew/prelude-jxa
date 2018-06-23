```applescript
-- use framework "Foundation"
-- use scripting additions
```

```applescript
-- lookup :: Eq a => a -> Container -> Maybe bon lookup(k, m)	set c to class of m	if c is list then		lookupTuples(k, m)	else if c = record then		lookupDict(k, m)	else		Nothing()	end ifend lookup
```

```js
// lookup :: Eq a => a -> Container -> Maybe b
const lookup = (k, m) =>
    (Array.isArray(m) ? (
        lookupTuples
    ) : lookupDict)(k, m);
```