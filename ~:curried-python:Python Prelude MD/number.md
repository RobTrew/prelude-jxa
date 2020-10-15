```js
// number :: Parser Number
const number = () =>
    // The value of a signed number, with or
    // without a floating point component.
    altP(
        decimal()
    )(
        integer()
    );
```