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
const succ = x => {
    const t = typeof x;
    return 'number' !== t ? (
        toEnum(
            'object' !== t ? t : x.enum
        )(1 + fromEnum(x))
    ) : 1 + x;
};
```