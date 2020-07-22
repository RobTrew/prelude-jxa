```js
// flip :: (a -> b -> c) -> b -> a -> c
const flip = op =>
    // The binary function op with its arguments reversed.
    1 < op.length ? (
        (a, b) => op(b, a)
    ) : (x => y => op(y)(x));
```