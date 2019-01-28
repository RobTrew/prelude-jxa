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