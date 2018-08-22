```applescript
-- succ :: Enum a => a -> a
on succ(x)
    if isChar(x) then
        chr(1 + ord(x))
    else
        1 + x
    end if
end succ
```

```js
// succ :: Enum a => a -> a
const succ = x =>
    isChar(x) ? (
        chr(1 + ord(x))
    ) : isNaN(x) ? (
        undefined
    ) : 1 + x;
```