```javascript
// approxRatio :: Float -> Float -> Ratio
const approxRatio = epsilon =>
    // A ratio derived by approximation
    // (at granularity epsilon) to the float n.
    n => {
        const
            gcde = (e, x, y) => {
                const gcd1 = (a, b) => b < e ? (
                    a
                ) : gcd1(b, a % b);

                return gcd1(abs(x), abs(y));
            },
            c = gcde(
                Boolean(epsilon) ? (
                    epsilon
                ) : (1 / 10000), 1, abs(n)
            ),
            r = ratio(quot(abs(n))(c))(quot(1, c));

        return {
            type: "Ratio",
            n: r.n * signum(n),
            d: r.d
        };
    };
```