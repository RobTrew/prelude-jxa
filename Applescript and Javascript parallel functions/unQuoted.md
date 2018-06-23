```applescript
-- unQuoted :: String -> Stringon unQuoted(s)	script p		on |λ|(x)			--{34, 39} contains id of x			34 = id of x		end |λ|	end script	dropAround(p, s)end unQuoted
```

```js
// unQuoted :: String -> String
const unQuoted = s =>
    dropAround(x => 34 === x.codePointAt(0), s);
```