```javascript
// ratioPlus :: Rational -> Rational -> Rational
const ratioPlus = n1 =>
    n2 => {
        const [r1, r2] = [n1, n2].map(rational);
        const d = lcm(r1.d)(r2.d);

        return ratio(
            (r1.n * (d / r1.d)) + (
                r2.n * (d / r2.d)
            )
        )(d);
    };
```