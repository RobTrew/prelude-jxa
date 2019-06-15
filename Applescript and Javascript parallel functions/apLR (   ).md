```applescript
-- apLR (<*>) :: Either e (a -> b) -> Either e a -> Either e b
on apLR(flr, lr)
    if missing value is |Left| of flr then
        if missing value is |Left| of lr then
            |Right|(|λ|(|Right| of lr) of mReturn(|Right| of flr))
        else
            lr
        end if
    else
        flr
    end if
end apLR
```

```js
// apLR (<*>) :: Either e (a -> b) -> Either e a -> Either e b
const apLR = flr => liftA2LR(identity)(flr)
```