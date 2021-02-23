```javascript
// ratioMult :: Rational -> Rational -> Rational
const ratioMult = n1 => n2 => {
    const [r1, r2] = map(rational)(
        [n1, n2]
    );

    return ratio(r1.n * r2.n)(
        r1.d * r2.d
    );
};
```