```js
// unZipN :: [(a,b,...)] -> ([a],[b],...)
const unzipN = tpls =>
    TupleN(...tpls.reduce(
        (a, tpl) => a.map(
            (x, i) => x.concat(tpl[i])
        ),
        replicate(
            0 < tpls.length ? (
                tpls[0].length
            ) : 0, []
        )
    ));
```