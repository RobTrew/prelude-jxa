```javascript
// Ratio :: Integral a => a -> a -> Ratio a
const Ratio = a => b => {
    const go = (x, y) =>
        0 !== y ? (() => {
            const d = gcd(x)(y);

            return {
                type: "Ratio",
                // numerator
                "n": Math.trunc(x / d),
                // denominator
                "d": Math.trunc(y / d)
            };
        })() : undefined;

    return go(a * signum(b), abs(b));
};
```