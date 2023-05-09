```javascript
// showPrecision :: Int -> Float -> String
const showPrecision = n => x => {
    // A string showing a floating point number
    // at a given degree of precision.
    const d = 10 ** n;

    return str(Math.round(d * x) / d);
};
```