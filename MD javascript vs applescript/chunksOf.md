```applescript
-- chunksOf :: Int -> [a] -> [[a]]on chunksOf(k, xs)	script		on go(ys)			set ab to splitAt(k, ys)			set a to |1| of ab			if {} ≠ a then				{a} & go(|2| of ab)			else				a			end if		end go	end script	result's go(xs)end chunksOf
```


```javascript
// chunksOf :: Int -> [a] -> [[a]]
const chunksOf = n =>
    // xs split into sublists of length n.
    // The last sublist will be short if n 
    // does not evenly divide the length of xs .
    xs => enumFromThenTo(0)(n)(
        xs.length - 1
    ).reduce(
        (a, i) => a.concat([
            xs.slice(i, (n + i))
        ]),
        []
    );
```