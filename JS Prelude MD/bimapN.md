```javascript
// bimapN :: (a -> b) -> (c -> d) -> TupleN -> TupleN
const bimapN = f =>
    // An n-tuple instance of bimap.
    // An n-tuple of unchanged dimension in which
    // the final value is an application of g
    // and the penultimate value is an application of f.
    g => nTuple => {
        const n = nTuple.length;

        return 1 < n
            ? TupleN(
                ...Array.from(nTuple).slice(0, n - 2),
                f(nTuple[n - 2]), g(nTuple[n - 1])
            )
            : null;
    };
```