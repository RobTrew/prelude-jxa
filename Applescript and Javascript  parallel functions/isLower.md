```applescript
-- isLower :: Char -> Boolon isLower(c)	set d to (id of c) - 97 -- id of "a"	d ≥ 0 and d < 26end isLower
```

```js
// isLower :: Char -> Bool
const isLower = c =>
    /[a-z]/.test(c);
```