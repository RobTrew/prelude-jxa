```js
// tpTag :: Parser (String, [String])
const tpTag = () =>
    // Key and optional values of a tag.
    // (TP tag values may be comma-delimited).
    thenBindP(
        char('@')
    )(
        tpTagName()
    )(k => bindP(
        altP(
            tpTagValues()
        )(
            pureP([])
        )
    )(vs => thenP(
        altP(
            eos()
        )(
            lookAhead(
                satisfy(ne(' '))
            )
        )
    )(pureP(Tuple(k)(vs)))));
```