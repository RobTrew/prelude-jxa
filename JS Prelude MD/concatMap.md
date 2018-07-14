```js
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = (f, xs) =>
    0 < xs.length ? (() => {
        const unit = 'string' !== typeof xs[0] ? [] : '';
        return unit.concat.apply(unit, xs.map(f))
    })() : [];
```