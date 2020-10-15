```js
// sign :: () -> Parser Function
const sign = () =>
    // The negate function as a parse of 
    // any '-', or the identity function.
    altP(
        bindP(
            oneOf('+-')
        )(c => pureP(
            ('-' !== c) ? identity : negate
        ))
    )(pureP(identity));
```