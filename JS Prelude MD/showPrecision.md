```js
// showPrecision :: Int -> Float -> String
const showPrecision = n => x => {
    // A string showing a floating point number
    // at a given degree of precision.
    const d = Math.pow(10, n);
    return str(Math.round(d * x) / d);
};
```