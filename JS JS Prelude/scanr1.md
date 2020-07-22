```js
// scanr1 :: (a -> a -> a) -> [a] -> [a]
const scanr1 = f =>
    // scanr1 is a variant of scanr that has no 
    // seed-value argument, and assumes that
    // xs is not empty.
    xs => xs.length > 0 ? (
        scanr(f)(
            xs.slice(-1)[0]
        )(xs.slice(0, -1))
    ) : [];
```