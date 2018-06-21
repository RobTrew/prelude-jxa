```js
-- | Build a forest from a list of seed values
```

```applescript
-- unfoldForest :: (b -> (a, [b])) -> [b] -> Foreston unfoldForest(f, xs)	set g to mReturn(f)	script		on |λ|(x)			unfoldTree(g, x)		end |λ|	end script	map(result, xs)end unfoldForest
```

```js
// | Build a forest from a list of seed values
```

```js
// unfoldForest :: (b -> (a, [b])) -> [b] -> Forest
const unfoldForest = (f, xs) =>
    xs.map(b => unfoldTree(f, b));
```