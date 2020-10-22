```javascript
// truncate :: Num -> Int
const truncate = x =>
    'Ratio' === x.type ? (
        properFracRatio(x)[0]
    ) : properFraction(x)[0];
```