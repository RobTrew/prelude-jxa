```applescript
-- minimumMay :: [a] -> Maybe aon minimumMay(xs)	set lng to length of xs	if lng < 1 then		Nothing()	else if lng > 1 then		set m to item 1 of xs		repeat with x in xs			set v to contents of x			if v < m then set m to v		end repeat		Just(m)	else		Just(item 1 of xs)	end ifend minimumMay
```

```js
// minimumMay :: [a] -> Maybe a
const minimumMay = xs =>
    xs.length > 0 ? (
        Just(xs.slice(1)
            .reduce((a, x) => x < a ? x : a, xs[0])
        )
    ) : Nothing();
```