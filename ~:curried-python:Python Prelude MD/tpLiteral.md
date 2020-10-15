```js
// tpLiteral :: () -> Parser (String, String)
const tpLiteral = () =>
    // A tuple representing a non-tag word in a TaskPaper
    // item. The first string of the (key, value) pair
    // is empty, and the value is the string literal.
    bindP(
        fmapP(cs => cs.join(''))(
            some(satisfy(c => ' ' !== c))
        )
    )(x => pureP(Tuple('')(x)));
```