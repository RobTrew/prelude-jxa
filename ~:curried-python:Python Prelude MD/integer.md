```js
// integer :: () -> Parser Integer
const integer = () =>
    // Signed integer value.
    bindP(
        token(sign())
    )(f => bindP(
        naturalNumber()
    )(x => pureP(f(x))));
```