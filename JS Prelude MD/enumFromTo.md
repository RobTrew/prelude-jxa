```js
// enumFromTo :: Enum a => a -> a -> [a]
const enumFromTo = (m, n) => {
    const
        [x, y] = [m, n].map(fromEnum),
        b = x + ('number' !== typeof m ? 0 : m - x);
    return Array.from({
        length: 1 + (y - x)
    }, (_, i) => toEnum(m)(b + i));
};
```