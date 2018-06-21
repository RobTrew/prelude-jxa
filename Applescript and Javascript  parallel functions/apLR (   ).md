```applescript
-- apLR (<*>) :: Either e (a -> b) -> Either e a -> Either e bon apLR(flr, lr)	if isRight(flr) then		if isRight(lr) then			|Right|(|λ|(|Right| of lr) of mReturn(|Right| of flr))		else			lr		end if	else		flr	end ifend apLR
```

```js
// apLR (<*>) :: Either e (a -> b) -> Either e a -> Either e b
const apLR = (flr, lr) => {
    const pf = isRight(flr);
    return pf && isRight(lr) ? (
        Right(flr.Right(lr.Right))
    ) : (pf ? lr : flr);
};
```