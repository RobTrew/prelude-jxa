```applescript
-- either :: (a -> c) -> (b -> c) -> Either a b -> c
on either(lf, rf, e)
    if missing value is |Left| of e then
        tell mReturn(rf) to |λ|(|Right| of e)
    else
        tell mReturn(lf) to |λ|(|Left| of e)
    end if
end either
```


```javascript
// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = fl =>
    // Application of the function fl to the
    // contents of any Left value in e, or
    // the application of fr to its Right value.
    fr => e => e.Left ? (
        fl(e.Left)
    ) : fr(e.Right);
```