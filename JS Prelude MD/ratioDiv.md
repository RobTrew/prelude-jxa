```javascript
// ratioDiv :: Rational -> Rational -> Rational
const ratioDiv = n1 => n2 => {
    const [r1, r2] = [n1, n2].map(rational);

    return Ratio(r1.n * r2.d)(
        r1.d * r2.n
    );
};
```