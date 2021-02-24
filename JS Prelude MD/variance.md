```javascript
// variance :: [Num] -> Num
const variance = xs => {
    const
        lng = xs.length,
        avg = xs.reduce((a, b) => a + b, 0) / lng;

    return xs.reduce(
        (a, b) => a + ((b - avg) ** 2),
        0
    ) / (lng - 1);
};
```