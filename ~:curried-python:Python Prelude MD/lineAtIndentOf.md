```js
// lineAtIndentOf :: String -> Int -> Parser String
const lineAtIndentOf = indentUnit =>
    // Parser for a line at a minimum depth of
    // indentation, in terms of a given indent unit.
    n => bindP(
        count(n)(string(indentUnit))
    )(_ => bindP(
        fmapP(concat)(many(noneOf('\n\r')))
    )(x => bindP(
        many(
            altP(oneOf('\n\r'))(
                eos()
            )
        )
    )(_ => pureP(x))));
```