```js
// showPrecision Int -> Float -> String
const showPrecision = n => f => {
    // A string showing a floating point number
    // at a given degree of precision.
    const d = Math.pow(10, n);
    return (Math.round(d * f) / d);
};
```