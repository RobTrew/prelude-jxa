```js
// numeric () -> Parser Number
const numeric = () =>
    // The value of a numeric string which 
    // may be in fractional, Scientific
    // or default notation.
    altP(
        fraction()
    )(
        altP(
            eNotation()
        )(
            number()
        )
    );
```