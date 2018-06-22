```applescript
-- concatMap :: (a -> [b]) -> [a] -> [b]on concatMap(f, xs)	tell mReturn(f)		set lng to length of xs		set acc to {}		repeat with i from 1 to lng			set acc to acc & |λ|(item i of xs, i, xs)		end repeat	end tell	return accend concatMap
```

```js
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = (f, xs) => [].concat.apply([], xs.map(f));
```