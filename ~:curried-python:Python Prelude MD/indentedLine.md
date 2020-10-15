```js
// indentedLine :: Parser (Int, String)
const indentedLine = () =>
    // The number of indent units, 
    // and the remaining string.
    bindP(
        indent()
    )(ts => bindP(
        bodyText()
    )(txt => thenP(
        many(oneOf('\n\r'))
    )(
        pureP(
            Tuple(ts.length)(txt.join(''))
        )
    )));
```