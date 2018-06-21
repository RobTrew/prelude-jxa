```applescript
-- Compose a function from a simple value to a tuple of
-- the separate outputs of two different functions
```

```applescript
-- fanArrow (&&&) :: (a -> b) -> (a -> c) -> (a -> (b, c))on fanArrow(f, g)	script		on |λ|(x)			Tuple(mReturn(f)'s |λ|(x), mReturn(g)'s |λ|(x))		end |λ|	end scriptend fanArrow
```

```js
// Compose a function from a simple value to a tuple of
// the separate outputs of two different functions
```

```js
// fanArrow (&&&) :: (a -> b) -> (a -> c) -> (a -> (b, c))
const fanArrow = (f, g) => x => Tuple(f(x), g(x));
```