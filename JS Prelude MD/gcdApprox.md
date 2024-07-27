```javascript
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