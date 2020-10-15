```js
// omniDurationPairs :: () -> 
// Parser [(Number, String)]
const omniDurationPairs = () =>
    // A list of (Number, Duration String)
    // pairs. Bare numbers are read as hours.
    bindP(
        many(letter())
    )(
        constant(many(
            bindP(
                token(numeric())
            )(d => bindP(
                altP(
                    token(omniDurationUnit())
                )(
                    pureP('h')
                )
            )(compose(pureP, Tuple(d))))
        ))
    );
```