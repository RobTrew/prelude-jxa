```javascript
// variance :: [Num] -> Num
const variance = xs => {
    const
        lng = xs.length,
        mean = xs.reduce((a, b) => a + b, 0) / lng;
    return xs.reduce(
        (a, b) => a + Math.pow(b - mean, 2),
        0
    ) / (lng - 1);
};
```