```javascript
// fmapDict :: (a -> b) ->
// {String :: a} -> {String :: b}
const fmapDict = f =>
    // A map of f over every value
    // in the given dictionary.
    dict => Object.entries(dict)
        .reduceRight(
            (a, [k, v]) => ({
                ...a,
                [k]: f(v)
            }),
            {}
        );
```