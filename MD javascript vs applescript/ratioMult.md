```applescript
-- ratioMult :: Rational -> Rational -> Rational
on ratioMult(n1, n2)
    set r1 to rational(n1)
    set r2 to rational(n2)
    ratio((n of r1) * (n of r2), (d of r1) * (d of r2))
end ratioMult
```


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