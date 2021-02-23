```javascript
// roundTo :: Int -> Float -> Float
const roundTo = n => x => {
    const d = 10 ** n;

    return Math.round(x * d) / d;
};
```