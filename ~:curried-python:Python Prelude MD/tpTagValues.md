```js
// tpTagValues :: Parser [String]
const tpTagValues = () =>
    // Optional parenthesised value 
    // component of a TaskPaper tag.
    // A list, because the TP syntax 
    // allows comma-separated values.
    fmapP(map(x => x.join('').trim()))(
        parens(
            sepBy(
                many(noneOf(',)'))
            )(char(','))
        )
    );
```