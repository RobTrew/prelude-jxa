```applescript
-- succ :: Enum a => a -> a
on succ(x)
    if isChar(x) then
        chr(ord(x) + 1)
    else
        1 + x
    end if
end succ
```

```js
// succ :: Enum a => a -> a
const succ = x =>
    isChar(x) ? (
        chr(ord(x) + 1)
    ) : isNaN(x) ? (
        undefined
    ) : x + 1;
```