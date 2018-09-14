```js
// flip :: (a -> b -> c) -> b -> a -> c
const flip = f =>
    1 < f.length ? (
        (a, b) => f(b, a)
    ) : (x => y => f(y)(x));
```