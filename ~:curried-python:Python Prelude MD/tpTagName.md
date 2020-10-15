```js
// tpTagName :: Parser String
const tpTagName = () =>
    // Name component of a TaskPaper tag.
    // (A TP tag name includes no colon, and 
    //  can not be 'type' or 'indent').
    bindP(
        fmapP(concat)(
            some(noneOf(' (:'))
        )
    )(name => thenP(
        altP(
            eos()
        )(
            lookAhead(oneOf(' ('))
        )
    )(
        pureP(
            ['type', 'indent']
            .includes(name) ? (
                ''
            ) : name
        )
    ));
```