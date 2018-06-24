```applescript
-- liftA2LR :: (a -> b -> c) -> Either d a -> Either d b -> Either d c
on liftA2LR(f, a, b)
    set x to |Right| of a
    set y to |Right| of b
    if x is missing value then
        a
    else if y is missing value then
        b
    else
        |Right|(|λ|(x, y) of mReturn(f))
    end if
end liftA2LR
```

```js
// liftA2LR :: (a -> b -> c) -> Either d a -> Either d b -> Either d c
const liftA2LR = (f, a, b) =>
    a.Right !== undefined ? (
        b.Right !== undefined ? (
            Right(f(a.Right, b.Right))
        ) : b
    ) : a;
```