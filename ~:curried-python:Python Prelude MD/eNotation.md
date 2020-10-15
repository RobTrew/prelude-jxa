```js
// eNotation :: () -> Parser Number
const eNotation = () =>
    // The value of a Scientific notation
    // number string.
    bindP(
        number()
    )(n => thenBindP(oneOf('Ee'))(
        number()
    )(e => pureP(
        Math.pow(10, e) * n
    )));
```