```applescript
-- minimumBy :: (a -> a -> Ordering) -> [a] -> aon minimumBy(f, xs)	set lng to length of xs	if lng < 1 then		missing value	else if lng > 1 then		tell mReturn(f)			set v to item 1 of xs			repeat with x in xs				if |λ|(x, v) < 0 then set v to contents of x			end repeat			return v		end tell	else		item 1 of xs	end ifend minimumBy
```

```js
//Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n)
```

```js
// minimumBy :: (a -> a -> Ordering) -> [a] -> a
const minimumBy = (f, xs) =>
    xs.reduce((a, x) => undefined === a ? x : (
        f(x, a) < 0 ? x : a
    ), undefined);
```