```js
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = (f, xs) => []
    .concat.apply(
        [],
        (Array.isArray(xs) ? (
            xs
        ) : xs.split('')).map(f)
    );
```