```javascript
// approxRatio :: Real -> Real -> Ratio
const approxRatio = epsilon =>
    n => {
        const
            c = gcdApprox(
                Boolean(epsilon)
                    ? epsilon
                    : (1 / 10000)
            )(1, n);

        return Ratio(
            Math.floor(n / c),
            Math.floor(1 / c)
        );
    };


// gcdApprox :: Real -> (Real, Real) -> Real
const gcdApprox = epsilon =>
    (x, y) => {
        const _gcd = (a, b) => (
            b < epsilon
                ? a
                : _gcd(b, a % b)
        );

        return _gcd(Math.abs(x), Math.abs(y));
    };
```