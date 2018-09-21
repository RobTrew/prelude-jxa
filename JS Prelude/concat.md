```js
// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs =>
    0 < xs.length ? (() => {
        const unit = 'string' !== typeof xs[0] ? (
            []
        ) : '';
        return unit.concat.apply(unit, xs);
    })() : [];
```