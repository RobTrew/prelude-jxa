```applescript
-- Applied to a predicate and a list, 
-- |any| returns true if at least one element of the 
-- list satisfies the predicate.
```

```applescript
-- any :: (a -> Bool) -> [a] -> Boolon |any|(f, xs)	tell mReturn(f)		set lng to length of xs		repeat with i from 1 to lng			if |λ|(item i of xs) then return true		end repeat		false	end tellend |any|
```

```js
// | True if any contained element satisfies the predicate.
```

```js
// any :: (a -> Bool) -> [a] -> Bool
const any = (p, xs) => xs.some(p);
```