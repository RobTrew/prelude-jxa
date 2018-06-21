```applescript
-- fmapLR (<$>) :: (a -> b) -> Either a a -> Either a bon fmapLR(f, lr)	if isRight(lr) then		|Right|(|λ|(|Right| of lr) of mReturn(f))	else		lr	end ifend fmapLR
```

```js
// fmapLR (<$>) :: (a -> b) -> Either a a -> Either a b
const fmapLR = (f, lr) =>
    Object.keys(lr)
    .includes('Right') ? (
        Right(f(lr.Right))
    ) : lr;
```