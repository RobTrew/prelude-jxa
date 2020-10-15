```js
// lineAtIndent :: Int -> Parser String
const lineAtIndent = n =>
    // Parser for a line at a minimum depth
    // of indentation.
    thenBindP(
        count(n)(indentUnit())
    )(
        fmapP(concat)(many(noneOf('\n\r')))
    )(x => thenP(
        many(oneOf('\n\r'))
    )(
        pureP(x)
    ));
```