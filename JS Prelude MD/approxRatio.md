```js
// approxRatio :: Float -> Float -> Ratio
const approxRatio = epsilon =>
    // An ratio derived by approximation
    // (at granularity epsilon) to the float n.
    n => {
        const
            gcde = (e, x, y) => {
                const _gcd = (a, b) => (b < e ? a : _gcd(b, a % b));
                return _gcd(abs(x), abs(y));
            },
            c = gcde(Boolean(epsilon) ? epsilon : (1 / 10000), 1, abs(n)),
            r = ratio(quot(abs(n))(c))(quot(1, c));
        return {
            type: 'Ratio',
            n: r.n * signum(n),
            d: r.d
        };
    };
```