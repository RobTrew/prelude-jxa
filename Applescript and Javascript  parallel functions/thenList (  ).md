```applescript
-- thenList (>>) :: [a] -> [b] -> [b]on thenList(xs, ys)	script		on |λ|(_)			ys		end |λ|	end script	concatMap(result, xs)end thenList
```

```js
// thenList (>>) :: [a] -> [b] -> [b]
const thenList = (xs, ys) =>
    concatMap(_ => ys, xs);
```