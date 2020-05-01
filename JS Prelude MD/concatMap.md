```js
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f =>
    xs => {
        const ys = xs.flatMap(f);
        return ys.some(x => 'String' !== x.constructor.name) ? (
            ys
        ) : ys.join('');
    };
```