```js
// permutations :: [a] -> [[a]]
const permutations = xs =>
    xs.reduceRight(
        (a, x) => a.flatMap(
            xs => Array.from({
                length: 1 + xs.length
            }, (_, i) => i)
            .map(n => xs.slice(0, n)
                .concat(x)
                .concat(xs.slice(n))
            )
        ),
        [[]]
    );
```