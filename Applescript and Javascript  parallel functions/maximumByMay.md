```applescript
-- maximumByMay :: (a -> a -> Ordering) -> [a] -> Maybe aon maximumByMay(f, xs)	set cmp to mReturn(f)	script max		on |λ|(a, b)			if a is missing value or cmp's |λ|(a, b) < 0 then				b			else				a			end if		end |λ|	end script		foldl1May(max, xs)end maximumByMay
```

```js
//Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n) 
```

```js
// maximumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const maximumByMay = (f, xs) =>
    xs.length > 0 ? (
        Just(xs.slice(1)
            .reduce((a, x) => f(x, a) > 0 ? x : a, xs[0]))
    ) : Nothing();
```