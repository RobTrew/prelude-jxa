```javascript
// floor :: Num -> Int
const floor = x => {
    const
        nr = (
            'Ratio' !== x.type ? (
                properFraction
            ) : properFracRatio
        )(x),
        n = nr[0];

    return 0 > nr[1] ? n - 1 : n;
};
```