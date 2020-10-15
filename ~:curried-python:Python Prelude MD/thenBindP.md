```js
// thenBindP :: Parser a -> Parser b -> 
// (b -> Parser c) Parser c
const thenBindP = o =>
    // A combination of thenP and bindP in which a 
    // preliminary  parser consumes text and discards
    // its output, before any output of a subsequent
    // parser is bound.
    p => f => Parser(
        s => parse(o)(s).flatMap(
            vr => parse(p)(vr[1]).flatMap(
                tpl => parse(f(tpl[0]))(tpl[1])
            )
        )
    );
```