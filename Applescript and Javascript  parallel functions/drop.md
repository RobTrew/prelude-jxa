```applescript
-- drop :: Int -> [a] -> [a]on drop(n, xs)	if n < length of xs then		if class of xs is text then			text (n + 1) thru -1 of xs		else			items (n + 1) thru -1 of xs		end if	else		{}	end ifend drop
```

```js
// drop :: Int -> [a] -> [a]
// drop :: Int -> String -> String
const drop = (n, xs) => xs.slice(n);
```