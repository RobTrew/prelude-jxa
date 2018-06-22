```applescript
-- findIndices :: (a -> Bool) -> [a] -> [Int]on findIndices(p, xs)	script		property f : mReturn(p)'s |λ|		on |λ|(x, i)			if f(x) then				{i}			else				{}			end if		end |λ|	end script	concatMap(result, xs)end findIndices
```

```js
// findIndices :: (a -> Bool) -> [a] -> [Int]
const findIndices = (p, xs) =>
    concatMap((x, i) => p(x) ? (
        [i]
    ) : [], xs);
```