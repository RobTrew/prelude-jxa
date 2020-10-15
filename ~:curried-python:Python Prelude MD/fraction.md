```js
// fraction :: () -> Parser Number
const fraction = () => {
    // The numeric value of a 
    // fraction string.
    const num = number();
    return bindP(
        token(num)
    )(n => thenBindP(
        token(char('/'))
    )(
        token(num)
    )(d => pureP(
        0 !== d ? (
            n / d
        ) : Infinity
    )));
};
```