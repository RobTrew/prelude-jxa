```javascript
// ratioMinus :: Rational -> Rational -> Rational
const ratioMinus = n1 => n2 => {
    const [r1, r2] = [n1, n2].map(rational);
    const d = lcm(r1.d)(r2.d);
    return ratio((r1.n * (d / r1.d)) - (r2.n * (d / r2.d)))(
        d
    );
};
```


```applescript
-- ratioMinus :: Rational -> Rational -> Rational
on ratioMinus(n1, n2)
    set r1 to rational(n1)
    set r2 to rational(n2)
    set d to lcm(d of r1, d of r2)
    ratio((n of r1) * (d / (d of r1) - ¬
        ((n of r2) * (d / (d of r2)))), d)
end ratioMinus
```