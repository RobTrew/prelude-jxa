```js
// succMay :: Enum a => a -> Maybe a
const succMay = x => {
    const t = typeof x;
    return 'number' !== t ? (() => {
        const [i, mx] = [x, maxBound(x)].map(fromEnum);
        return i < mx ? (
            Just(toEnum(x)(1 + i))
        ) : Nothing();
    })() : x < Number.MAX_SAFE_INTEGER ? (
        Just(1 + x)
    ) : Nothing();
};
```