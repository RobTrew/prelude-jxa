```javascript
// permutations :: [a] -> [[a]]
const permutations = xs => (
    ys => ys.reduceRight(
        (a, y) => a.flatMap(
            zs => Array.from({
                length: 1 + zs.length
            }, (_, i) => i)
            .map(n => zs.slice(0, n)
                .concat(y)
                .concat(zs.slice(n))
            )
        ), [[]]
    )
)(list(xs));
```