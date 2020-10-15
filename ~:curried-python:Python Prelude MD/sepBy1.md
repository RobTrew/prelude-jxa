```js
// sepBy1 :: Parser a -> Parser b -> Parser [a]
const sepBy1 = p =>
    // One or more occurrences of p, as 
    // separated by (discarded) instances of sep.
    sep => bindP(
        p
    )(x => bindP(
        many(
            thenP(sep)(
                bindP(p)(pureP)
            )
        )
    )(xs => pureP([x].concat(xs))));
```