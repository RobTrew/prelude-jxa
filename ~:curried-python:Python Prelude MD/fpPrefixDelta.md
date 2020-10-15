```js
// fpPrefixDelta :: (Int -> Int) -> Parser FileName
const fpPrefixDelta = f =>
    // A filename with a two-digit numeric prefix
    // (followed by a space)
    // either incremented or decremented (f = succ|pred)
    // or created at '00 '.
    bindP(
        fmapP(concat)(
            many(digit())
        )
    )(ds => bindP(
        many(char(' '))
    )(_ => bindP(
        many(anyChar())
    )(fp => pureP(
        (
            0 < ds.length && '00' !== ds  ? (
                str(f(Number(ds)))
                .padStart(2, '0')
            ) : '00'
        ) + ' ' + concat(fp)
    ))));
```