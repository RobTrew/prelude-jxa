```applescript
-- Lift a simple function to one which applies to a tuple, 
-- transforming only the first item of the tuple
```

```applescript
-- firstArrow :: (a -> b) -> ((a, c) -> (b, c))on firstArrow(f)	script		on |λ|(xy)			Tuple(mReturn(f)'s |λ|(|1| of xy), |2| of xy)		end |λ|	end scriptend |first|
```

```js
// Lift a simple function to one which applies to a tuple, 
// transforming only the first item of the tuple
```

```js
// firstArrow :: (a -> b) -> ((a, c) -> (b, c))
const firstArrow = f => xy => Tuple(f(xy[0]), xy[1]);
```