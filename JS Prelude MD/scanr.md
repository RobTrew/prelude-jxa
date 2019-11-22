```js
// scanr :: (b -> a -> b) -> b -> [a] -> [b]
const scanr = f => startValue => xs =>
    xs.reduceRight((a, x) => {
        const v = f(x)(a[0]);
        return Tuple(v)(a[1].concat(v));
    }, Tuple(startValue)([startValue]))[1];
```