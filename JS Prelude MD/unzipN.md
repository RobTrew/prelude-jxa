```javascript
// unzipN :: [(a,b,...)] -> ([a],[b],...)
const unzipN = tpls =>
    TupleN(...tpls.reduce(
        (a, tpl) => a.map(
            (x, i) => x.concat(tpl[i])
        ),
        replicate(
            Boolean(tpls.length) ? (
                tpls[0].length
            ) : 0, []
        )
    ));
```