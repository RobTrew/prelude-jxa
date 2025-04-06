```javascript
// approxRatio :: Real -> Real -> Ratio
const approxRatio = epsilon =>
    n => {
        const
            c = gcdApprox(
               epsilon || (1 / 10000)
            )(1, n);

        return Ratio(
            Math.floor(n / c)
        )(
            Math.floor(1 / c)
        );
    };
```