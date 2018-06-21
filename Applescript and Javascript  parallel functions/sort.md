```applescript
-- sort :: Ord a => [a] -> [a]
on sort(xs)
	((current application's NSArray's arrayWithArray:xs)'s ¬
		sortedArrayUsingSelector:"compare:") as list
end sort
```

```js
// sort :: Ord a => [a] -> [a]
const sort = xs => xs.slice()
    .sort((a, b) => a < b ? -1 : (a > b ? 1 : 0));
```