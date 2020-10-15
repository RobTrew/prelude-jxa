```js
// proportion :: () -> Parser Float
const proportion = () =>
    token(
        bindP(
            numeric()
        )(n => bindP(
            option(1)(
                fmapP(_ => 0.01)(
                    char('%')
                )
            )
        )(m => pureP(n * m)))
    );
```