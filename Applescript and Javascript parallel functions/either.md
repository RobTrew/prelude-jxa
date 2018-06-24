```applescript
-- either :: (a -> c) -> (b -> c) -> Either a b -> c
on either(lf, rf, e)
    if isRight(e) then
        tell mReturn(rf) to |λ|(|Right| of e)
    else
        tell mReturn(lf) to |λ|(|Left| of e)
    end if
end either
```

```js
// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = (lf, rf, e) =>
    'Either' === e.type ? (
        undefined !== e.Left ? (
            lf(e.Left)
        ) : rf(e.Right)
    ) : undefined;
```