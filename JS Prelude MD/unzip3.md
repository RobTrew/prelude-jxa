```javascript
// unzip3 :: [(a,b,c)] -> ([a],[b],[c])
const unzip3 = xyzs =>
    xyzs.reduce(
        (a, x) => TupleN.apply(null, [0, 1, 2].map(
            i => a[i].concat(x[i])
        )),
        TupleN([], [], [])
    );
```