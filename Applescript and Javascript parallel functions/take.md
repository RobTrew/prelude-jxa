```applescript
-- take :: Int -> [a] -> [a]on take(n, xs)	if class of xs is string then		if n > 0 then			text 1 thru min(n, length of xs) of xs		else			""		end if	else		if n > 0 then			items 1 thru min(n, length of xs) of xs		else			{}		end if	end ifend take
```

```js
// take :: Int -> [a] -> [a]
const take = (n, xs) => xs.slice(0, n);
```