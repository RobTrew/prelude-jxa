```js
// ratioMinus :: Rational -> Rational -> Rational
const ratioMinus = (r1, r2) => {
    const d = lcm(r1.d, r2.d);
    return ratio(
        (r1.n * (d / r1.d)) - (r2.n * (d / r2.d)),
        d
    );
};
```