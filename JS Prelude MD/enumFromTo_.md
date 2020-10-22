```javascript
// enumFromTo_ :: Enum a => a -> a -> [a]
const enumFromTo_ = m => n => {
    const
        [x, y] = [m, n].map(fromEnum),
        b = x + (isNaN(m) ? 0 : m - x);
    return Array.from({
        length: 1 + (y - x)
    }, (_, i) => toEnum(m)(b + i));
};
```