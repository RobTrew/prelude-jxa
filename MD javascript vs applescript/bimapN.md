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


```applescript
-- bimapN :: (a -> b) -> (c -> d) -> TupleN -> TupleN
on bimapN(f, g, tplN)
    set z to length of tplN
    set k1 to (z - 1) as string
    set k2 to z as string
    
    insertDict(k2, mReturn(g)'s |λ|(Just of lookupDict(k2, tplN)), ¬
        insertDict(k1, mReturn(f)'s |λ|(Just of lookupDict(k1, tplN)), tplN))
end bimapN
```