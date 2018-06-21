```applescript
-- tail :: [a] -> [a]on tail(xs)	if xs = {} then		missing value	else		rest of xs	end ifend tailDef
```

```js
// tail :: [a] -> [a]
const tail = xs => xs.length > 0 ? xs.slice(1) : [];
```