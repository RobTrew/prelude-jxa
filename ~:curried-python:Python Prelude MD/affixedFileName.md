```js
// affixedFileName :: () -> Parser FileName
const affixedFileName = () =>
    // Parser for filenames of the form
    // xxxxxx-00n.ext
    // Can be used with fmapP derive the 
    // next file name in a series.
    bindP(
        manyTill(
            noneOf('-.')
        )(
            lookAhead(oneOf('-.'))
        )
    )(stem => bindP(
        option([])(
            thenP(
                char('-')
            )(many(satisfy(ne('.'))))
        )
    )(affix => thenBindP(
        char('.')
    )(
        many(anyChar())
    )(ext => pureP({
        stem: stem,
        affix: affix,
        ext: ext
    }))));
```