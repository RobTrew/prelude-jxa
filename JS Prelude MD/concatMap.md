```js
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f =>
    xs => {
        const v = list(xs).flatMap(f);
        return 'string' !== typeof xs ? (
            v
        ) : v.join('');
    };
```