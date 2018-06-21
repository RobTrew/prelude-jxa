```applescript
-- signum :: Num -> Numon signum(x)	if x < 0 then		-1	else if x = 0 then		0	else		1	end ifend signum
```

```applescript
// | Sign of a number.
// The functions 'abs' and 'signum' should satisfy the law:
//
// > abs x * signum x == x
//
// For real numbers, the 'signum' is either @-1@ (negative), @0@ (zero)
// or @1@ (positive).
```

```js
// signum :: Num -> Num
const signum = n => n < 0 ? -1 : (n > 0 ? 1 : 0);
```