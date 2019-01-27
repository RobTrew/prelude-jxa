```js
// enumFromTo :: Enum a => a -> a -> [a]
const enumFromTo = (m, n) => {
    const
        [x, y] = [m, n].map(fromEnum),
        b = x + (Number(m) ? m - x : 0),
        tp = m instanceof Object ? (
            m.enum
        ) : typeof m;
    return Array.from({
        length: 1 + (y - x)
    }, (_, i) => toEnum(tp)(
        b + i
    ));
};
```