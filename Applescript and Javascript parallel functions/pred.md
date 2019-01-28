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
const pred = x => {
    const t = typeof x;
    return 'number' !== t ? (
        toEnum(
            'object' !== t ? t : x.enum
        )(fromEnum(x) - 1)
    ) : x - 1;
};
```