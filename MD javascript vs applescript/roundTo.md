```javascript
// roundTo :: Int -> Float -> Float
const roundTo = n => x => {
    const d = Math.pow(10, n);
    return Math.round(x * d) / d;
};
```


```applescript
-- Float x rounded to n decimals
-- roundTo :: Int -> Float -> Float
```