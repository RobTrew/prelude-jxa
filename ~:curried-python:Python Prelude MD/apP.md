```js
// apP <*> :: Parser (a -> b) -> Parser a -> Parser b
const apP = pf =>
    // A new parser obtained by the application 
    // of a Parser-wrapped function,
    // to a Parser-wrapped value.
    p => Parser(
        s => parse(pf)(s).flatMap(
            vr => parse(
                fmapP(vr[0])(p)
            )(vr[1])
        )
    );
```