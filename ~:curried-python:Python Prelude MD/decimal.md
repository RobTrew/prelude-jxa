```js
// decimal :: () -> Parser Number
const decimal = () => {
    // The value of a decimal number string.
    const
        digitsOrZero = altP(
            fmapP(concat)(some(digit()))
        )(pureP('0'));
    return bindP(
        token(sign())
    )(f => bindP(
        digitsOrZero
    )(ns => thenBindP(char('.'))(
        digitsOrZero
    )(ds => pureP(f(read(ns + '.' + ds))))));
};
```