```applescript
-- bindList (>>=) :: [a] -> (a -> [b]) -> [b]on bindList(xs, f)	set acc to {}	tell mReturn(f)		repeat with x in xs			set acc to acc & |λ|(contents of x)		end repeat	end tell	return accend bindList
```

```js
// bindList (>>=) :: [a] -> (a -> [b]) -> [b]
const bindList = (xs, mf) => 
  [].concat.apply([], xs.map(mf));
```