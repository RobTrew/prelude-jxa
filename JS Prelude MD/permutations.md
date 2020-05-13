```js
// permutations :: [a] -> [[a]]
const permutations = xs => (
    ys => ys.reduceRight(
        (a, y) => a.flatMap(
            ys => Array.from({
                length: 1 + ys.length
            }, (_, i) => i)
            .map(n => ys.slice(0, n)
                .concat(y)
                .concat(ys.slice(n))
            )
        ),[[]]
    )
)(list(xs));
```