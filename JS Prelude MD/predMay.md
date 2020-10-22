```javascript
// predMay :: Enum a => a -> Maybe a
const predMay = x => {
    const t = typeof x;
    return 'number' !== t ? (() => {
        const [i, mn] = [x, minBound(x)].map(fromEnum);
        return i > mn ? (
            Just(toEnum(x)(i - 1))
        ) : Nothing();
    })() : x > Number.MIN_SAFE_INTEGER ? (
        Just(x - 1)
    ) : Nothing();
};
```