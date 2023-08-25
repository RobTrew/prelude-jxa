```javascript
// groupOnKey :: Eq k => (a -> k) -> [a] -> [(k, [a])]
const groupOnKey = f =>
    // A list of (k, [a]) tuples, in which each [a]
    // contains only elements for which f returns the
    // same value, and in which k is that value.
    // The concatenation of the [a] in each tuple === xs.
    xs => 0 < xs.length
        ? groupBy(a => b => a[0] === b[0])(
            xs.map(x => [f(x), x])
        )
        .map(gp => [
            gp[0][0],
            gp.map(ab => ab[1])
        ])
        : [];
```