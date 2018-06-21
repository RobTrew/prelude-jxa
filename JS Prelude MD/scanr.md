```js
// scanr :: (b -> a -> b) -> b -> [a] -> [b]
const scanr = (f, startValue, xs) =>
    xs.reduceRight((a, x) => {
        const v = f(a.acc, x);
        return {
            acc: v,
            scan: [v].concat(a.scan)
        };
    }, {
        acc: startValue,
        scan: [startValue]
    })
    .scan;
```