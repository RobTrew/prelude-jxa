```applescript
-- enumFromTo :: Enum a => a -> a -> [a]
on enumFromTo(m, n)
    if class of m is integer then
        enumFromToInt(m, n)
    else
        enumFromToChar(m, n)
    end if
end enumFromTo
```

```js
// enumFromTo :: Enum a => a -> a -> [a]
const enumFromTo = (m, n) =>
    'number' !== typeof m ? (
        enumFromToChar(m, n)
    ) : enumFromToInt(m, n);
```