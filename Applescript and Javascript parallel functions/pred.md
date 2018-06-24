```applescript
-- pred :: Enum a => a -> a
on pred(x)
    if isChar(x) then
        chr(ord(x) - 1)
    else
        (-1) + x
    end if
end pred
```

```js
// pred :: Enum a => a -> a
const pred = x =>
    isChar(x) ? (
        chr(ord(x) - 1)
    ) : isNaN(x) ? (
        undefined
    ) : x - 1;
```