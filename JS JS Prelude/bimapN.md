```js
// bimapN :: (a -> b) -> (c -> d) -> TupleN -> TupleN
const bimapN = f =>
    // An n-tuple instance of bimap.
    // An n-tuple of unchanged dimension in which
    // the final value is an application of g
    // and the penultimate value is an application of f.
    g => tpln => {
        const n = tpln.length;
        return undefined !== n ? (
            TupleN(
                ...Array.from(tpln).slice(0, n - 2),
                f(tpln[n - 2]), g(tpln[n - 1])
            )
        ) : undefined;
    };
```