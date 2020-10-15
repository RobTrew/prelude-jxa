```js
// omniDuration :: Dict { String :: Int } -> 
// Parser Number
const omniDuration = unitTable =>
    // Total number of hours represented by 
    // an Omni Duration string, given the
    // active set of duration label values.
    // Aims to return the same number of hours as 
    // Formatter.Duration.decimalFromString()
    fmapP(
        foldl(
            a => nk => a + (
                fst(nk) * unitTable[snd(nk)]
            )
        )(0)
    )(omniDurationPairs());
```