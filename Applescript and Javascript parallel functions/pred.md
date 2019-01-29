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
    return 'number' !== t ? (() => {
        const [i, mn] = [x, minBound(x)].map(fromEnum);
        return i > mn ? (
            toEnum(x)(i - 1)
        ) : Error('succ :: enum out of range.')
    })() : x > Number.MIN_SAFE_INTEGER ? (
        x - 1
    ) : Error('succ :: Num out of range.')
};
```