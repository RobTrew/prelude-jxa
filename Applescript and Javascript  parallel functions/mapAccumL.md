```applescript
-- 'The mapAccumL function behaves like a combination of map and foldl; 
-- it applies a function to each element of a list, passing an 
-- accumulating parameter from |Left| to |Right|, and returning a final 
-- value of this accumulator together with the new list.' (see Hoogle)
```

```applescript
-- mapAccumL :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
on mapAccumL(f, acc, xs)
	script
		on |λ|(a, x, i)
			tell mReturn(f) to set pair to |λ|(|1| of a, x, i)
			Tuple(|1| of pair, (|2| of a) & {|2| of pair})
		end |λ|
	end script
	
	foldl(result, Tuple(acc, []), xs)
end mapAccumL
```

```js
// 'The mapAccumL function behaves like a combination of map and foldl; 
// it applies a function to each element of a list, passing an accumulating 
// parameter from left to right, and returning a final value of this 
// accumulator together with the new list.' (See Hoogle)
```

```js
// mapAccumL :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
const mapAccumL = (f, acc, xs) =>
    xs.reduce((a, x, i) => {
        const pair = f(a[0], x, i);
        return Tuple(pair[0], a[1].concat(pair[1]));
    }, Tuple(acc, []));
```