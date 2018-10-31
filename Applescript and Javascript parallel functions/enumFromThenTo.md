```applescript
-- enumFromThenTo :: Enum a => a -> a -> a -> [a]
on enumFromThenTo(x1, x2, y)
    if class of x1 is integer then
        enumFromThenToInt(x1, x2, y)
    else
        enumFromThenToChar(x1, x2, y)
    end if
end enumFromThenTo
```

```js
// enumFromThenTo :: Enum a => a -> a -> a -> [a]
const enumFromThenTo = (x1, x2, y) =>
    ('number' !== typeof x1 ? (
        enumFromThenToChar
    ) : enumFromThenToInt)(
        ...[x1, x2, y]
    )
```