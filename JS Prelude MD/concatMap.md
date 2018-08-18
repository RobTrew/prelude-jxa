```js
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = (f, xs) =>
    0 < xs.length ? (
        [].concat.apply([], (
            'string' !== typeof xs ? (
                xs
            ) : xs.split('')
        ).map(f))
    ) : [];
```