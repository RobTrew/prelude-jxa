```applescript
-- filter :: (a -> Bool) -> [a] -> [a]on filter(f, xs)	tell mReturn(f)		set lst to {}		set lng to length of xs		repeat with i from 1 to lng			set v to item i of xs			if |λ|(v, i, xs) then set end of lst to v		end repeat		return lst	end tellend filter
```

```js
// filter :: (a -> Bool) -> [a] -> [a]
const filter = (f, xs) => xs.filter(f);
```