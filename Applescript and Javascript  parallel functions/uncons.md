```applescript
-- uncons :: [a] -> Maybe (a, [a])on uncons(xs)	if xs = {} then		Nothing()	else		if class of xs is string then			set cs to text items of xs			Just(Tuple(item 1 of cs, rest of cs))		else			Just(Tuple(item 1 of xs, rest of xs))		end if	end ifend uncons
```

```js
// uncons :: [a] -> Maybe (a, [a])
const uncons = xs =>
    xs.length > 0 ? (
        Just(Tuple(xs[0], xs.slice(1)))
    ) : Nothing();
```