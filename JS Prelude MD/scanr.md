```javascript
// scanr :: (a -> b -> b) -> b -> [a] -> [b]
const scanr = f =>
    startValue => xs => xs.reduceRight(
        (a, x) => {
            const v = f(x)(a[0]);

            return Tuple(v)([v].concat(a[1]));
        }, Tuple(startValue)([startValue])
    )[1];
```