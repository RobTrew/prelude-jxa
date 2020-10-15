```js
// affixedFileName :: () -> Parser FileName
const successorFilePath = fp =>
    // Incremented fileName with -00n affix 
    // before before file extension.
    fmapP(dct => copyFileLR(
        fp
    )(
        combine(
            takeDirectory(fp)
        )(concat(dct.stem) + (
            '-' + str(succ(parseInt(
                concat(dct.affix || '0')
            )))
            .padStart(3, '0') + (
                '.' + concat(dct.ext)
            )
        ))
    ))(affixedFileName());
```