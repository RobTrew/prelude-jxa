```js
// scanl :: (b -> a -> b) -> b -> [a] -> [b]
const scanl = f => startValue => xs =>
    xs.reduce((a, x) => {
        const v = f(a[0])(x);
        return Tuple(v)(a[1].concat(v));
    }, Tuple(startValue)([startValue]))[1];
```