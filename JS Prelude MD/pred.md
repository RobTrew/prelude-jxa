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