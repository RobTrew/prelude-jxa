```applescript
-- succMay :: Enum a => a -> Maybe a
on succMay(x)
    if x is maxBound(x) then
        Nothing()
    else
        Just(toEnum(x)'s |λ|(fromEnum(x) + 1))
    end if
end succMay
```


```javascript
// succMay :: Enum a => a -> Maybe a
const succMay = x => {
    const t = typeof x;

    return "number" !== t ? (() => {
        const [i, mx] = [x, maxBound(x)].map(fromEnum);

        return i < mx ? (
            Just(toEnum(x)(1 + i))
        ) : Nothing();
    })() : x < Number.MAX_SAFE_INTEGER ? (
        Just(1 + x)
    ) : Nothing();
};
```