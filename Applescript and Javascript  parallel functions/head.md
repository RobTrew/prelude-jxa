```applescript
-- head :: [a] -> aon head(xs)	if xs = {} then		missing value	else		item 1 of xs	end ifend head
```

```js
// head :: [a] -> a
const head = xs => xs.length ? xs[0] : undefined;
```