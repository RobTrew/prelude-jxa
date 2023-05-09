```javascript
// approxRatio :: Float -> Float -> Ratio
const approxRatio = epsilon =>
    // A ratio approximating the floating point n
    // to within the given margin (small epsilon value).
    n => {
        const
            gcde = (e, x, y) => {
                const _gcd = (a, b) =>
                    b < e ? (
                        a
                    ) : _gcd(b, a % b);

                return _gcd(Math.abs(x), Math.abs(y));
            },
            c = gcde(Boolean(epsilon) ? (
                epsilon
            ) : (1 / 10000), 1, n);

        return Ratio(
            Math.floor(n / c)
        )(
            Math.floor(1 / c)
        );
    };
```