```js
// naturalNumber :: () -> Parser Natural Number
const naturalNumber = () =>
    // The value of an unsigned integer.
    fmapP(
        x => read(concat(x))
    )(
        some(digit())
    );
```