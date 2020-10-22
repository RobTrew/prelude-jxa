```javascript
// succ :: Enum a => a -> a
const succ = x => {
    const t = typeof x;
    return 'number' !== t ? (() => {
        const [i, mx] = [x, maxBound(x)].map(fromEnum);
        return i < mx ? (
            toEnum(x)(1 + i)
        ) : Error('succ :: enum out of range.');
    })() : x < Number.MAX_SAFE_INTEGER ? (
        1 + x
    ) : Error('succ :: Num out of range.');
};
```


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